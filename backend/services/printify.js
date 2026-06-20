/**
 * Printify API Service
 * Model:  Marketplace — pick local print partners per country
 * Docs:   https://developers.printify.com
 * Auth:   Personal Access Token (Bearer) for own stores
 *         OAuth 2.0 for multi-store integrations
 * Base:   https://api.printify.com/v1/
 *
 * ⚠️  MANDATORY: All requests MUST include User-Agent header
 *     declaring your app name or language (e.g. "NodeJS / AlazanStore")
 *     Requests without User-Agent are rejected.
 *
 * Sandbox: No isolated sandbox.
 * Test by creating real orders and using Printify's order review window
 * (cancel before production starts in the dashboard).
 *
 * Regional providers to configure in Printify dashboard:
 *  - US:  Multiple partners (Monster Digital, District Photo, etc.)
 *  - CA:  Partners in Ontario
 *  - MX:  Monster Digital (Guadalajara), MWW On Demand
 *  - BR:  Partners in São Paulo
 *
 * Note: Different partners = possible variation in color accuracy + packaging.
 * Always order physical samples before going live with each partner.
 */
const axios = require('axios');

const BASE_URL = 'https://api.printify.com/v1';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:  `Bearer ${process.env.PRINTIFY_API_KEY}`,
    'Content-Type': 'application/json;charset=utf-8',
    // MANDATORY per Printify docs — requests without this are rejected
    'User-Agent':   process.env.PRINTIFY_USER_AGENT || 'NodeJS / AlazanStore'
  },
  timeout: 15000
});

const SHOP_ID = process.env.PRINTIFY_SHOP_ID;

/**
 * List available print providers for a given blueprint (product type)
 */
async function getProviders(blueprintId) {
  const { data } = await client.get(`/catalog/blueprints/${blueprintId}/print_providers.json`);
  return data;
}

/**
 * Get all products in your Printify shop
 */
async function getProducts() {
  const { data } = await client.get(`/shops/${SHOP_ID}/products.json`);
  return data;
}

/**
 * Get shipping rates for an order
 */
async function getShippingRates({ items, recipient }) {
  const { data } = await client.post(`/shops/${SHOP_ID}/orders/shipping.json`, {
    line_items: items.map(item => ({
      product_id:  item.printifyProductId,
      variant_id:  item.printifyVariantId,
      quantity:    item.quantity || 1
    })),
    address_to: {
      first_name: customer.name.split(' ')[0],
      last_name:  customer.name.split(' ').slice(1).join(' ') || '-',
      country:    recipient.countryCode,
      region:     recipient.state || '',
      city:       recipient.city,
      zip:        recipient.postalCode,
      address1:   recipient.address
    }
  });
  return data;
}

/**
 * Create a production order
 */
async function createOrder({ orderRef, customer, items }) {
  const body = {
    external_id: orderRef,
    label:       `AlazanStore ${orderRef}`,
    line_items: items.map(item => ({
      product_id: item.printifyProductId,
      variant_id: item.printifyVariantId,
      quantity:   item.quantity || 1
    })),
    shipping_method: 1,
    is_economy_shipping: false,
    send_shipping_notification: true,
    address_to: {
      first_name: customer.name.split(' ')[0],
      last_name:  customer.name.split(' ').slice(1).join(' ') || '-',
      email:      customer.email,
      phone:      customer.phone || '',
      country:    customer.countryCode,
      region:     customer.state || '',
      city:       customer.city,
      zip:        customer.postalCode,
      address1:   customer.address
    }
  };

  const { data } = await client.post(`/shops/${SHOP_ID}/orders.json`, body);
  return data;
}

/**
 * Send order to production (Printify requires explicit send-to-production call)
 */
async function confirmOrder(orderId) {
  const { data } = await client.post(`/shops/${SHOP_ID}/orders/${orderId}/send_to_production.json`);
  return data;
}

/**
 * Get order status + tracking
 */
async function getOrder(orderId) {
  const { data } = await client.get(`/shops/${SHOP_ID}/orders/${orderId}.json`);
  return data;
}

/**
 * Cancel order
 */
async function cancelOrder(orderId) {
  const { data } = await client.post(`/shops/${SHOP_ID}/orders/${orderId}/cancel.json`);
  return data;
}

module.exports = {
  createOrder,
  confirmOrder,
  getOrder,
  cancelOrder,
  getShippingRates,
  getProducts,
  getProviders
};
