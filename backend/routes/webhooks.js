const express = require('express');
const router  = express.Router();

const stripeService = require('../services/stripe');
const mpService     = require('../services/mercadopago');
const podRouter     = require('../services/pod-router');  // multi-provider router
const ordersDB      = require('../db/orders');
const email         = require('../services/email');

// ── Stripe Webhook ────────────────────────────────────────────
// Must use raw body — mounted before express.json() in server.js
router.post('/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripeService.constructWebhookEvent(req.body, sig);
  } catch (err) {
    console.error('[Stripe Webhook] Signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {

      case 'checkout.session.completed': {
        const session = event.data.object;
        const orderRef = session.metadata?.orderRef;
        const order = ordersDB.getOrderByPaymentId(session.id);

        if (!order) {
          console.warn('[Stripe] Order not found for session:', session.id);
          break;
        }

        const shippingAddr = session.shipping_details?.address;
        const customer = {
          ...order.customer,
          address:     shippingAddr?.line1 || order.customer.address,
          city:        shippingAddr?.city  || order.customer.city,
          postalCode:  shippingAddr?.postal_code || order.customer.postalCode,
          countryCode: shippingAddr?.country || order.countryCode,
          state:       shippingAddr?.state   || ''
        };

        // 1. Mark as paid
        ordersDB.updateOrder(order.id, { status: 'paid' });

        // 2. Route to correct POD provider based on customer country
        const podResult = await podRouter.createOrder({
          orderRef: order.ref,
          customer,
          items:    order.items,
          shipping: { id: 'STANDARD' }
        });

        ordersDB.updateOrder(order.id, {
          podProvider: podResult.provider,
          podOrderId:  podResult.orderId,
          status:      'in_production'
        });

        // 3. Confirm (send to production queue)
        await podRouter.confirmOrder(podResult.provider, podResult.orderId);

        // 4. Send confirmation email
        await email.sendOrderConfirmation({
          customer,
          order: { ...order, ref: order.ref, totalUSD: order.totalUSD }
        });

        console.log(`[Stripe] Order ${order.ref} → paid → ${podResult.provider} #${podResult.orderId}`);
        break;
      }

      case 'payment_intent.payment_failed': {
        const intent = event.data.object;
        const order  = ordersDB.getOrderByPaymentId(intent.id);
        if (order) ordersDB.updateOrder(order.id, { status: 'payment_failed' });
        break;
      }

      // ── Stripe Connect v2 — seller capability updated ────────
      case 'v2.core.account[configuration.recipient].capability_status_updated': {
        const { account, configuration } = event.data;
        const capability = configuration?.recipient?.capabilities?.stripe_balance?.stripe_transfers;
        console.log(`[Connect] Account ${account} recipient capability: ${capability?.status}`);
        // TODO: update seller record in DB when capability is active
        break;
      }
    }
  } catch (err) {
    console.error('[Stripe Webhook] Handler error:', err);
  }

  res.json({ received: true });
});

// ── MercadoPago Webhook ───────────────────────────────────────
router.post('/mercadopago', express.json(), async (req, res) => {
  try {
    const { type, data, action } = req.body;

    if (type !== 'payment' || !data?.id) {
      return res.json({ received: true });
    }

    // Find order by preference ID or external_reference
    const orders = ordersDB.getAllOrders();
    let order = orders.find(o => o.paymentId === data.id.toString());

    if (!order) {
      // Try to match by external_reference via MP API
      const payment = await mpService.getPayment(data.id, req.query.country || 'AR');
      order = ordersDB.getOrderByPaymentId(payment.external_reference);
      if (!order) {
        console.warn('[MP Webhook] Order not found for payment:', data.id);
        return res.json({ received: true });
      }
    }

    const payment = await mpService.getPayment(data.id, order.countryCode || 'AR');

    if (payment.status === 'approved') {
      ordersDB.updateOrder(order.id, { status: 'paid', paymentId: data.id.toString() });

      // Route to correct POD provider based on customer country
      const podResult = await podRouter.createOrder({
        orderRef: order.ref,
        customer: order.customer,
        items:    order.items,
        shipping: { id: 'STANDARD' }
      });

      ordersDB.updateOrder(order.id, {
        podProvider: podResult.provider,
        podOrderId:  podResult.orderId,
        status:      'in_production'
      });

      await podRouter.confirmOrder(podResult.provider, podResult.orderId);
      await email.sendOrderConfirmation({ customer: order.customer, order });

      console.log(`[MercadoPago] Order ${order.ref} → approved → ${podResult.provider} #${podResult.orderId}`);

    } else if (['rejected', 'cancelled', 'refunded'].includes(payment.status)) {
      ordersDB.updateOrder(order.id, { status: `payment_${payment.status}` });
    }

  } catch (err) {
    console.error('[MP Webhook] Error:', err.message);
  }

  res.json({ received: true });
});

// ── Stripe Connect v2 Event Destination ──────────────────────
// Receives thin events: v2.core.account capability updates
router.post('/stripe-v2', express.raw({ type: 'application/json' }), async (req, res) => {
  let event;
  try {
    event = JSON.parse(req.body);
  } catch {
    return res.status(400).send('Invalid JSON');
  }

  console.log(`[Connect v2] event: ${event.type} | account: ${event.related_object?.id}`);

  if (event.type === 'v2.core.account[configuration.recipient].capability_status_updated') {
    const accountId = event.related_object?.id;
    const status    = event.data?.configuration?.recipient?.capabilities
                        ?.stripe_balance?.stripe_transfers?.status;
    console.log(`[Connect v2] Account ${accountId} transfer capability: ${status}`);
    // TODO: update seller record when status === 'active'
  }

  res.json({ received: true });
});

// ── Printful Webhook ──────────────────────────────────────────
router.post('/printful', express.json(), async (req, res) => {
  try {
    const { type, data } = req.body;

    if (type === 'package_shipped') {
      const { order: podOrder, shipment } = data;
      const localOrder = ordersDB.getAllOrders()
        .find(o => (o.podOrderId === podOrder.id || o.podOrderId === String(podOrder.id)) && o.podProvider === 'printful');

      if (localOrder) {
        ordersDB.updateOrder(localOrder.id, {
          status:         'shipped',
          trackingNumber: shipment.tracking_number,
          trackingUrl:    shipment.tracking_url,
          carrier:        shipment.carrier
        });

        await email.sendShippingUpdate({
          customer:    localOrder.customer,
          order:       localOrder,
          trackingUrl: shipment.tracking_url
        });

        console.log(`[Printful] Order ${localOrder.ref} → shipped → tracking: ${shipment.tracking_number}`);
      }
    }
  } catch (err) {
    console.error('[Printful Webhook] Error:', err.message);
  }

  res.json({ received: true });
});

module.exports = router;
