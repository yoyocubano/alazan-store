const express  = require('express');
const router   = express.Router();
const ordersDB   = require('../db/orders');
const podRouter  = require('../services/pod-router');

// Simple API key middleware for admin routes
function adminAuth(req, res, next) {
  const key = req.headers['x-admin-key'];
  if (key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

// ── GET /api/orders/:ref ─────────────────────────────────────
// Public — customer can check their own order by ref
router.get('/:ref', async (req, res, next) => {
  try {
    const order = ordersDB.getOrderById(req.params.ref);
    if (!order) return res.status(404).json({ error: 'Order not found' });

    // Only expose safe fields to public
    res.json({
      ref:            order.ref,
      status:         order.status,
      createdAt:      order.createdAt,
      trackingNumber: order.trackingNumber,
      trackingUrl:    order.trackingUrl,
      carrier:        order.carrier,
      items:          order.items.map(i => ({ name: i.name, quantity: i.quantity || 1 }))
    });
  } catch (err) {
    next(err);
  }
});

// ── GET /api/orders (admin) ──────────────────────────────────
router.get('/', adminAuth, (req, res, next) => {
  try {
    const { status, limit, offset } = req.query;
    const orders = ordersDB.getAllOrders({
      status,
      limit:  parseInt(limit  || 50),
      offset: parseInt(offset || 0)
    });
    res.json({ orders, count: orders.length });
  } catch (err) {
    next(err);
  }
});

// ── POST /api/orders/:ref/sync-printful (admin) ──────────────
// Manually sync a Printful order status
router.post('/:ref/sync-printful', adminAuth, async (req, res, next) => {
  try {
    const order = ordersDB.getOrderById(req.params.ref);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    if (!order.podOrderId) return res.status(400).json({ error: 'No POD order linked' });

    const provider = order.podProvider || 'printful';
    const podOrder = await podRouter.getOrder(provider, order.podOrderId);
    const shipment = podOrder.shipments?.[0] || podOrder.shipment;

    const updated = ordersDB.updateOrder(order.id, {
      status:         podOrder.status === 'shipped' ? 'shipped' : order.status,
      trackingNumber: shipment?.tracking_number || order.trackingNumber,
      trackingUrl:    shipment?.tracking_url    || order.trackingUrl
    });

    res.json({ order: updated, podProvider: provider, podStatus: podOrder.status });
  } catch (err) {
    next(err);
  }
});

// ── POST /api/orders/:ref/resend-email (admin) ───────────────
router.post('/:ref/resend-email', adminAuth, async (req, res, next) => {
  try {
    const order = ordersDB.getOrderById(req.params.ref);
    if (!order) return res.status(404).json({ error: 'Order not found' });

    const emailService = require('../services/email');
    await emailService.sendOrderConfirmation({ customer: order.customer, order });
    res.json({ sent: true });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
