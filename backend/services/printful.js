/**
 * Printful API Service
 * Auth:  Scoped Private Token (Bearer) — configure scopes in Printful Developer Portal
 *        OAuth 2.0 also supported for multi-store integrations
 * Docs:  https://developers.printful.com
 * Hubs:  US (Charlotte, Dallas, LA, Phoenix), CA (Mississauga), MX (Tijuana), BR (Rio de Janeiro)
 *
 * Sandbox: No isolated sandbox. Orders must be created on production endpoint and
 * MANUALLY CANCELLED in the Printful dashboard before reaching print stage.
 * Add store-level test mode in: Printful → Store → Settings → API
 */
const axios = require('axios');
const { getPrintfulVariant } = require('../config/sku-map');

const BASE_URL = 'https://api.printful.com';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    'Content-Type': 'application/json'
  },
  timeout: 15000
});

// ── Product variant IDs per garment type ────────────────────
// These are Printful's internal variant IDs for common sizes.
// Full list: GET /products/{id}/variants
const VARIANT_SIZE_MAP = {
  tshirt: {
    S: 4012, M: 4013, L: 4014, XL: 4015, XXL: 4016
  },
  sweatshirt: {
    S: 6920, M: 6921, L: 6922, XL: 6923, XXL: 6924
  },
  hoodie: {
    S: 7086, M: 7087, L: 7088, XL: 7089, XXL: 7090
  },
  kids_tshirt: {
    '2T': 7345, '4T': 7346, '6': 7347, '8': 7348, '10': 7349
  }
};

// ── Color hex map for Printful print files ──────────────────
const COLOR_HEX = {
  black: '#000000',
  white: '#FFFFFF',
  gray:  '#808080'
};

// ── Calculate shipping options ──────────────────────────────
async function getShippingRates({ items, recipient }) {
  const body = {
    recipient: {
      address1:     recipient.address,
      city:         recipient.city,
      country_code: recipient.countryCode, // AR, BR, MX, US, CA
      zip:          recipient.postalCode,
      state_code:   recipient.state || ''
    },
    items: items.map(item => ({
      quantity:   item.quantity || 1,
      variant_id: getVariantId(item.garmentType, item.size || 'M')
    }))
  };

  const { data } = await client.post('/shipping/rates', body);
  return data.result;
}

// ── Create order in Printful (called after payment success) ─
async function createOrder({ orderRef, customer, items, shipping }) {
  const body = {
    external_id:   orderRef,
    shipping:      shipping.id || 'STANDARD', // Printful shipping level code
    recipient: {
      name:         customer.name,
      address1:     customer.address,
      city:         customer.city,
      state_code:   customer.state || '',
      country_code: customer.countryCode,
      zip:          customer.postalCode,
      email:        customer.email
    },
    items: items.map(item => ({
      external_id:  item.cartItemId,
      // Use sku-map first, fall back to legacy getVariantId
      variant_id:   getPrintfulVariant(item.garmentType, item.colorHex || '#000000', item.size || 'M')
                    || getVariantId(item.garmentType, item.size || 'M'),
      quantity:     item.quantity || 1,
      name:         item.name,
      retail_price: (item.priceUSD || 15).toFixed(2),
      files: [{
        type: 'front',
        url:  item.graphicUrl
      }]
    }))
  };

  const { data } = await client.post('/orders', body);
  return data.result;
}

// ── Confirm order (sends to production) ─────────────────────
async function confirmOrder(printfulOrderId) {
  const { data } = await client.post(`/orders/${printfulOrderId}/confirm`);
  return data.result;
}

// ── Get order status ─────────────────────────────────────────
async function getOrder(printfulOrderId) {
  const { data } = await client.get(`/orders/${printfulOrderId}`);
  return data.result;
}

// ── Get all products in the store ────────────────────────────
async function getStoreProducts() {
  const { data } = await client.get(`/store/products?store_id=${process.env.PRINTFUL_STORE_ID}`);
  return data.result;
}

// ── Create a product in the store (sync) ─────────────────────
async function syncProduct({ name, garmentType, graphicUrl, baseProductId }) {
  const variants = Object.entries(VARIANT_SIZE_MAP[garmentType] || VARIANT_SIZE_MAP.tshirt)
    .map(([size, variantId]) => ({
      variant_id:   variantId,
      retail_price: getRetailPrice(garmentType),
      files: [
        { type: 'front', url: graphicUrl }
      ]
    }));

  const body = {
    sync_product: {
      name,
      thumbnail: graphicUrl
    },
    sync_variants: variants
  };

  const { data } = await client.post(`/store/products`, body);
  return data.result;
}

// ── Helpers ──────────────────────────────────────────────────
function getVariantId(garmentType, size) {
  const map = VARIANT_SIZE_MAP[garmentType] || VARIANT_SIZE_MAP.tshirt;
  return map[size] || map['M'];
}

function getRetailPrice(garmentType) {
  const prices = {
    tshirt:      '29.99',
    sweatshirt:  '49.99',
    hoodie:      '54.99',
    kids_tshirt: '19.99'
  };
  return prices[garmentType] || '29.99';
}

module.exports = {
  getShippingRates,
  createOrder,
  confirmOrder,
  getOrder,
  getStoreProducts,
  syncProduct,
  getVariantId,
  VARIANT_SIZE_MAP
};
