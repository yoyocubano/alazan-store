/**
 * Reserva INK / Live Ink — Brazil only
 * Platform: https://live.ink
 *
 * ⚠️  INTEGRATION MODEL IS INVERSE — not an outgoing API.
 *
 * Live Ink servers connect TO your WooCommerce REST API (OAuth),
 * not the other way around. There is no Bearer token you call from here.
 *
 * Setup flow:
 *  1. Create brand profile at live.ink
 *  2. Enter your WooCommerce store URL (must be HTTPS)
 *  3. Live Ink redirects to your WP Admin for OAuth authorization
 *     (WordPress Application Passwords — REST API read/write)
 *  4. Live Ink polls your store for orders with status "processing" / "completed"
 *  5. Production is triggered automatically on their side
 *
 * Requirements:
 *  - WordPress Permalinks → "Post name" (not "Plain")
 *  - Wordfence: allow Application Passwords (REST API auth)
 *  - Your WooCommerce store accessible via public HTTPS URL
 *
 * Plans:
 *  - Free (limited catalog)
 *  - Essencial: R$399/month (~$72.55 USD) — full catalog, bulk publish, better margins
 *
 * Neck label: additional R$1.50/unit — configure in Live Ink dashboard
 * CPF: must be collected in WooCommerce checkout and appear in order address
 *      (Live Ink reads it from the order data it pulls from your store)
 *
 * Because Live Ink pulls orders autonomously, there is NO outgoing API to call
 * from this backend service. Order fulfillment happens via WooCommerce webhook
 * or polling — Live Ink handles it once authorized.
 *
 * For order status/tracking: Live Ink updates WooCommerce order status directly.
 * You can read tracking from the WooCommerce order meta via WC REST API.
 */

const WC_BASE  = process.env.WOOCOMMERCE_URL;    // e.g. https://yourdomain.com
const WC_KEY   = process.env.WC_CONSUMER_KEY;    // WooCommerce REST API consumer key
const WC_SECRET = process.env.WC_CONSUMER_SECRET;

const axios = require('axios');

// Read tracking info Live Ink wrote back to WooCommerce order
async function getOrderTracking(wcOrderId) {
  if (!WC_BASE || !WC_KEY || !WC_SECRET) {
    throw new Error('WooCommerce credentials not configured (WC_CONSUMER_KEY / WC_CONSUMER_SECRET)');
  }

  const url = `${WC_BASE}/wp-json/wc/v3/orders/${wcOrderId}`;
  const { data } = await axios.get(url, {
    auth: { username: WC_KEY, password: WC_SECRET },
    timeout: 10000
  });

  // Live Ink writes tracking to order meta_data
  const trackingMeta = data.meta_data?.find(m => m.key === '_tracking_number' || m.key === 'tracking_number');
  return {
    orderId:       wcOrderId,
    status:        data.status,
    trackingNumber: trackingMeta?.value || null,
    metaData:      data.meta_data
  };
}

// Verify Live Ink authorization is working by checking a WC order exists
async function verifyConnection() {
  if (!WC_BASE || !WC_KEY || !WC_SECRET) {
    return { connected: false, reason: 'Missing WC_CONSUMER_KEY / WC_CONSUMER_SECRET in .env' };
  }
  try {
    const { data } = await axios.get(`${WC_BASE}/wp-json/wc/v3/orders?per_page=1`, {
      auth: { username: WC_KEY, password: WC_SECRET },
      timeout: 8000
    });
    return { connected: true, storeUrl: WC_BASE, ordersAccessible: Array.isArray(data) };
  } catch (err) {
    return { connected: false, reason: err.message };
  }
}

// Reserva INK does not support outgoing createOrder / confirmOrder calls.
// Order creation happens via WooCommerce order status → Live Ink polls automatically.
async function createOrder() {
  throw new Error(
    'Reserva INK (Live Ink) uses inverse integration: ' +
    'create the order in WooCommerce and Live Ink will pull it automatically. ' +
    'No outgoing API call needed.'
  );
}

async function confirmOrder() {
  throw new Error('Reserva INK auto-confirms from WooCommerce order status. No manual confirm needed.');
}

async function getOrder(wcOrderId) {
  return getOrderTracking(wcOrderId);
}

module.exports = {
  createOrder,
  confirmOrder,
  getOrder,
  getOrderTracking,
  verifyConnection
};
