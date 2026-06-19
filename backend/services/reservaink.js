/**
 * Reserva INK / Live Ink Service
 * Coverage: Brazil ONLY (national production + delivery)
 * Platform: https://live.ink
 * Plan: Essencial = R$399/month (~$72.55 USD)
 * Features: Premium fashion quality, neck labels, soft-hand eco inks
 *
 * WooCommerce integration requires:
 * - WordPress permalinks set to "Post name"
 * - Wordfence disabled during API credential setup
 *
 * CPF format required in address: XXX.XXX.XXX-XX
 */
const axios = require('axios');

const BASE_URL = 'https://api.live.ink/v1';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.RESERVAINK_API_KEY}`,
    'Content-Type': 'application/json'
  },
  timeout: 20000
});

/**
 * Get shipping rates (Correios + private carriers)
 * CPF is mandatory for Correios labels
 */
async function getShippingRates({ items, recipient }) {
  const { data } = await client.post('/shipping/rates', {
    destination: {
      postal_code: recipient.postalCode,
      city:        recipient.city,
      state:       recipient.state || '',
      country:     'BR'
    },
    items: items.map(i => ({
      quantity: i.quantity || 1,
      weight:   0.2 // kg per garment (estimate)
    }))
  });
  return data.rates || data;
}

/**
 * Create production order in Reserva INK
 * recipient.cpf REQUIRED for Brazilian dispatch via Correios
 * Format: XXX.XXX.XXX-XX
 */
async function createOrder({ orderRef, customer, items }) {
  if (!customer.cpf) {
    throw new Error('CPF is required for Reserva INK orders in Brazil (format: XXX.XXX.XXX-XX)');
  }

  // Validate CPF format
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!cpfRegex.test(customer.cpf)) {
    throw new Error(`Invalid CPF format: ${customer.cpf}. Must be XXX.XXX.XXX-XX`);
  }

  const body = {
    external_id: orderRef,
    customer: {
      name:  customer.name,
      email: customer.email,
      cpf:   customer.cpf,
      phone: customer.phone || ''
    },
    shipping_address: {
      street:      customer.address,
      city:        customer.city,
      state:       customer.state || 'SP',
      postal_code: customer.postalCode,
      country:     'BR',
      cpf:         customer.cpf  // also on address for label generation
    },
    items: items.map(item => ({
      product_id:   item.reservainkProductId || null,
      size:         item.size || 'M',
      color:        item.color || 'branco',
      quantity:     item.quantity || 1,
      print_files: {
        front: item.imageUrl || item.graphicUrl,
        // Optional: back print
        ...(item.backImageUrl ? { back: item.backImageUrl } : {})
      },
      // Neck label: custom brand label (R$1.50/unit extra)
      neck_label: item.neckLabelUrl || process.env.RESERVAINK_NECK_LABEL_URL || null
    }))
  };

  const { data } = await client.post('/orders', body);
  return data;
}

/**
 * Confirm order (send to production queue)
 */
async function confirmOrder(orderId) {
  const { data } = await client.post(`/orders/${orderId}/submit`);
  return data;
}

/**
 * Get order status + Correios tracking code
 */
async function getOrder(orderId) {
  const { data } = await client.get(`/orders/${orderId}`);
  return data;
}

/**
 * Cancel order (allowed before production starts)
 */
async function cancelOrder(orderId) {
  const { data } = await client.delete(`/orders/${orderId}`);
  return data;
}

module.exports = {
  createOrder,
  confirmOrder,
  getOrder,
  cancelOrder,
  getShippingRates
};
