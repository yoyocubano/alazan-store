/**
 * Gelato API Service
 * Covers: US (39 hubs), CA, MX, BR via "Gelato Connect" smart routing
 * Docs:   https://dashboard.gelato.com/docs
 * Auth:   X-API-KEY header (generated in Gelato Connect portal)
 * Base:   https://order.gelatoapis.com
 *
 * Sandbox: YES — real sandbox available.
 * Register a "Sandbox Customer" under Jobs & Estimations in the Gelato dashboard.
 * Send test orders via API → validates shipping quotes + file resolution.
 * No real charges or production triggered.
 *
 * Apparel restrictions (important for garment stores):
 *  - US:  Full front, back, sleeves, neck labels ✓
 *  - CA:  Front + back only — NO sleeves, NO neck labels
 *  - MX:  Front + back only — NO sleeves, NO neck labels
 *  - BR:  Front + back only — NO sleeves, NO neck labels
 * Orders with sleeve/neck prints outside US → auto-rerouted to US hub (customs risk)
 */
const axios = require('axios');

const BASE_URL = 'https://order.gelatoapis.com';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-API-KEY':     process.env.GELATO_API_KEY,
    'Content-Type':  'application/json'
  },
  timeout: 15000
});

// Gelato product UIDs for common garments (verify in Gelato catalog)
const PRODUCT_UID = {
  tshirt:      'apparel_product_gca_t-shirt_gsc_crewneck_gcu_unisex_gqa_130_gsi_s_gco_white_gpr_4-4',
  sweatshirt:  'apparel_product_gca_sweatshirt_gsc_crewneck_gcu_unisex_gqa_400_gsi_s_gco_white_gpr_4-0',
  hoodie:      'apparel_product_gca_hoodie_gsc_hooded_gcu_unisex_gqa_400_gsi_s_gco_white_gpr_4-0',
  kids_tshirt: 'apparel_product_gca_t-shirt_gsc_crewneck_gcu_kids_gqa_130_gsi_2t_gco_white_gpr_4-0'
};

async function getShippingRates({ items, recipient }) {
  const { data } = await client.post('/v4/orders:quote', {
    orderReferenceId: `quote-${Date.now()}`,
    customerReferenceId: 'quote',
    currency: 'USD',
    shippingAddress: {
      country:    recipient.countryCode,
      postCode:   recipient.postalCode,
      city:       recipient.city,
      addressLine1: recipient.address
    },
    products: items.map(item => ({
      itemReferenceId: item.id,
      productUid:      PRODUCT_UID[item.garmentType] || PRODUCT_UID.tshirt,
      quantity:        item.quantity || 1,
      files: [{ type: 'default', url: item.imageUrl || item.graphicUrl }]
    }))
  });
  return data.shipmentMethods || data;
}

async function createOrder({ orderRef, customer, items, shipping }) {
  const body = {
    orderReferenceId: orderRef,
    customerReferenceId: customer.email,
    currency: 'USD',
    shippingAddress: {
      firstName:    customer.name.split(' ')[0],
      lastName:     customer.name.split(' ').slice(1).join(' ') || '-',
      email:        customer.email,
      phone:        customer.phone || '',
      country:      customer.countryCode,
      postCode:     customer.postalCode,
      city:         customer.city,
      addressLine1: customer.address
    },
    products: items.map(item => ({
      itemReferenceId: item.id || item.name,
      productUid:      PRODUCT_UID[item.garmentType] || PRODUCT_UID.tshirt,
      quantity:        item.quantity || 1,
      files: [{ type: 'default', url: item.imageUrl || item.graphicUrl }]
    })),
    shipmentMethodUid: shipping?.gelatoMethodUid || null
  };

  const { data } = await client.post('/v4/orders', body);
  return data;
}

async function confirmOrder(orderId) {
  // Gelato auto-confirms on creation; no separate confirm step needed
  return { id: orderId, status: 'accepted' };
}

async function getOrder(orderId) {
  const { data } = await client.get(`/v4/orders/${orderId}`);
  return data;
}

async function cancelOrder(orderId) {
  const { data } = await client.post(`/v4/orders/${orderId}:cancel`);
  return data;
}

module.exports = {
  createOrder,
  confirmOrder,
  getOrder,
  cancelOrder,
  getShippingRates,
  PRODUCT_UID
};
