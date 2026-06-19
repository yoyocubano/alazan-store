const express = require('express');
const router  = express.Router();
const { v4: uuidv4 } = require('uuid');

const stripeService = require('../services/stripe');
const mpService     = require('../services/mercadopago');
const ordersDB      = require('../db/orders');

// ── POST /api/checkout/stripe ─────────────────────────────────
// Creates a Stripe Checkout Session and returns the redirect URL
// Body: { items, customer, countryCode }
router.post('/stripe', async (req, res, next) => {
  try {
    const { items, customer, countryCode = 'US' } = req.body;

    if (!items?.length) return res.status(400).json({ error: 'Cart is empty' });
    if (!customer?.email) return res.status(400).json({ error: 'Customer email required' });

    const totalUSD = items.reduce((s, i) => s + (i.priceUSD * (i.quantity || 1)), 0);

    // Create order record first
    const order = ordersDB.createOrder({
      customer,
      items,
      totalUSD,
      currency:        'USD',
      countryCode,
      paymentProvider: 'stripe'
    });

    const session = await stripeService.createCheckoutSession({
      lineItems: items.map(i => ({
        name:     i.name,
        priceUSD: i.priceUSD,
        quantity: i.quantity || 1,
        imageUrl: i.imageUrl
      })),
      customer,
      orderRef:   order.ref,
      successUrl: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}&order=${order.ref}`,
      cancelUrl:  `${process.env.FRONTEND_URL}/?cancelled=1`
    });

    // Store session ID so webhook can match it
    ordersDB.updateOrder(order.id, { paymentId: session.sessionId });

    res.json({
      orderId:    order.id,
      orderRef:   order.ref,
      sessionId:  session.sessionId,
      redirectUrl: session.url
    });
  } catch (err) {
    next(err);
  }
});

// ── POST /api/checkout/stripe/intent ─────────────────────────
// For embedded Stripe Elements — returns client_secret
router.post('/stripe/intent', async (req, res, next) => {
  try {
    const { items, customer, countryCode = 'US' } = req.body;

    if (!items?.length) return res.status(400).json({ error: 'Cart is empty' });

    const totalUSD = items.reduce((s, i) => s + (i.priceUSD * (i.quantity || 1)), 0);

    const order = ordersDB.createOrder({
      customer, items, totalUSD,
      currency: 'USD', countryCode,
      paymentProvider: 'stripe'
    });

    const intent = await stripeService.createPaymentIntent({
      amountUSD: totalUSD,
      currency:  'usd',
      metadata:  { orderRef: order.ref, customerName: customer.name }
    });

    ordersDB.updateOrder(order.id, { paymentId: intent.paymentIntentId });

    res.json({
      orderId:      order.id,
      orderRef:     order.ref,
      clientSecret: intent.clientSecret,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
    });
  } catch (err) {
    next(err);
  }
});

// ── POST /api/checkout/mercadopago ───────────────────────────
// Creates a MercadoPago Preference and returns the init_point URL
// countryCode: AR | BR | MX
router.post('/mercadopago', async (req, res, next) => {
  try {
    const { items, customer, countryCode = 'AR' } = req.body;

    if (!items?.length) return res.status(400).json({ error: 'Cart is empty' });
    if (!customer?.email) return res.status(400).json({ error: 'Customer email required' });
    if (!['AR', 'BR', 'MX'].includes(countryCode)) {
      return res.status(400).json({ error: `MercadoPago not available for ${countryCode}` });
    }

    const totalUSD = items.reduce((s, i) => s + (i.priceUSD * (i.quantity || 1)), 0);

    const order = ordersDB.createOrder({
      customer, items, totalUSD,
      currency:        mpService.CURRENCY[countryCode],
      countryCode,
      paymentProvider: 'mercadopago'
    });

    const preference = await mpService.createPreference({
      items:       items.map(i => ({ ...i, priceUSD: i.priceUSD })),
      customer,
      orderRef:    order.ref,
      countryCode
    });

    ordersDB.updateOrder(order.id, { paymentId: preference.preferenceId });

    res.json({
      orderId:      order.id,
      orderRef:     order.ref,
      preferenceId: preference.preferenceId,
      redirectUrl:  preference.initPoint,     // Production
      sandboxUrl:   preference.sandboxUrl,    // Testing
      publicKey:    mpService.getPublicKey(countryCode)
    });
  } catch (err) {
    next(err);
  }
});

// ── GET /api/checkout/config?country=XX ───────────────────────
// Returns which payment providers are available + public keys for the frontend
router.get('/config', (req, res) => {
  const country = (req.query.country || 'US').toUpperCase();

  const usesMercadoPago = ['AR', 'BR', 'MX'].includes(country);
  const usesStripe      = ['US', 'CA', 'MX', 'GB', 'FR', 'DE', 'ES', 'IT'].includes(country);

  res.json({
    country,
    providers: {
      stripe:      usesStripe      ? { available: true, publishableKey: process.env.STRIPE_PUBLISHABLE_KEY }  : { available: false },
      mercadopago: usesMercadoPago ? { available: true, publicKey: mpService.getPublicKey(country) }           : { available: false }
    },
    currency: mpService.CURRENCY[country] || 'USD'
  });
});

// ── GET /api/checkout/shipping ────────────────────────────────
// Get Printful shipping rates
router.post('/shipping', async (req, res, next) => {
  try {
    const printful = require('../services/printful');
    const { items, recipient } = req.body;
    const rates = await printful.getShippingRates({ items, recipient });
    res.json({ rates });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
