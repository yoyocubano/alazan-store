/**
 * Dimona API Service
 * Covers: AR (Buenos Aires), BR (Brazil), MX (Mexico), US (Chicago + Miami)
 * API Docs: https://api.dimonatee.com
 * Files: PNG 300 DPI with transparency
 * Methods: DTG, DTF (1200 DPI), Embroidery
 */
const axios = require('axios');

const BASE_URL = 'https://api.dimonatee.com';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.DIMONA_API_KEY}`,
    'Content-Type': 'application/json'
  },
  timeout: 20000
});

// Dimona hub routing per country
// They will auto-select the closest hub internally,
// but we label to know which country hub is active
const COUNTRY_HUB = {
  AR: 'argentina',
  BR: 'brazil',
  MX: 'mexico',
  US: 'chicago'
};

// Dimona product type codes (validate with /products endpoint)
const PRODUCT_TYPE_MAP = {
  tshirt:      'CAMISETA',
  sweatshirt:  'MOLETOM',
  hoodie:      'MOLETOM_CAPUZ',
  kids_tshirt: 'CAMISETA_INFANTIL'
};

// Print method selection: DTF recommended for poly blends, DTG for cotton
const PRINT_METHOD = {
  tshirt:      'DTG',
  sweatshirt:  'DTF',
  hoodie:      'DTF',
  kids_tshirt: 'DTG'
};

/**
 * Get available shipping options to recipient
 */
async function getShippingRates({ items, recipient }) {
  const { data } = await client.post('/shipping/rates', {
    recipient: {
      country: recipient.countryCode,
      postal_code: recipient.postalCode,
      city: recipient.city,
      address: recipient.address
    },
    items: items.map(i => ({
      product_type: PRODUCT_TYPE_MAP[i.garmentType] || 'CAMISETA',
      quantity: i.quantity || 1
    }))
  });
  return data.rates || data;
}

/**
 * Create a production order in Dimona
 * Called after payment is confirmed
 */
async function createOrder({ orderRef, customer, items, shipping }) {
  const body = {
    external_reference: orderRef,
    recipient: {
      name:        customer.name,
      email:       customer.email,
      phone:       customer.phone || '',
      address:     customer.address,
      city:        customer.city,
      state:       customer.state || '',
      postal_code: customer.postalCode,
      country:     customer.countryCode,
      // CPF required for Brazil — must be in format XXX.XXX.XXX-XX
      ...(customer.countryCode === 'BR' && customer.cpf
        ? { document: customer.cpf }
        : {})
    },
    shipping_method: shipping?.method || 'STANDARD',
    items: items.map(item => ({
      product_type:   PRODUCT_TYPE_MAP[item.garmentType] || 'CAMISETA',
      print_method:   item.printMethod || PRINT_METHOD[item.garmentType] || 'DTG',
      size:           item.size || 'M',
      color:          item.color || 'white',
      quantity:       item.quantity || 1,
      // Front print file — PNG 300 DPI with transparency required
      files: [
        {
          placement: 'front',
          url:       item.imageUrl || item.graphicUrl,
          dpi:       300
        }
      ]
    }))
  };

  const { data } = await client.post('/orders', body);
  return data;
}

/**
 * Confirm / submit order for production
 */
async function confirmOrder(orderId) {
  const { data } = await client.post(`/orders/${orderId}/confirm`);
  return data;
}

/**
 * Get order status + tracking
 */
async function getOrder(orderId) {
  const { data } = await client.get(`/orders/${orderId}`);
  return data;
}

/**
 * Cancel order (only if not yet in production)
 */
async function cancelOrder(orderId) {
  const { data } = await client.delete(`/orders/${orderId}`);
  return data;
}

/**
 * Returns true if Dimona covers this country with LOCAL production
 * (no customs, no import duties)
 */
function hasLocalProduction(countryCode) {
  return ['AR', 'BR', 'MX', 'US'].includes(countryCode);
}

module.exports = {
  createOrder,
  confirmOrder,
  getOrder,
  cancelOrder,
  getShippingRates,
  hasLocalProduction,
  COUNTRY_HUB,
  PRODUCT_TYPE_MAP
};
