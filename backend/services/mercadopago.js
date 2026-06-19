const { MercadoPagoConfig, Payment, Preference } = require('mercadopago');

// ── Country-specific MP clients ───────────────────────────────
// Each country has its own set of credentials

function getClient(countryCode) {
  const tokens = {
    AR: process.env.MP_AR_ACCESS_TOKEN,
    BR: process.env.MP_BR_ACCESS_TOKEN,
    MX: process.env.MP_MX_ACCESS_TOKEN
  };
  const token = tokens[countryCode];
  if (!token) throw new Error(`No MercadoPago access token for country: ${countryCode}`);
  return new MercadoPagoConfig({ accessToken: token });
}

function getPublicKey(countryCode) {
  const keys = {
    AR: process.env.MP_AR_PUBLIC_KEY,
    BR: process.env.MP_BR_PUBLIC_KEY,
    MX: process.env.MP_MX_PUBLIC_KEY
  };
  return keys[countryCode] || null;
}

// ── Currency per country ──────────────────────────────────────
const CURRENCY = { AR: 'ARS', BR: 'BRL', MX: 'MXN' };

// ── USD → local conversion (use real rates from .env) ────────
function toLocal(amountUSD, countryCode) {
  const rates = {
    AR: parseFloat(process.env.RATE_ARS || 950),
    BR: parseFloat(process.env.RATE_BRL || 5.05),
    MX: parseFloat(process.env.RATE_MXN || 17.2)
  };
  return Math.round(amountUSD * (rates[countryCode] || 1));
}

// ── Create Preference (redirect checkout) ────────────────────
// MP Preference = payment session, redirects user to MP checkout
async function createPreference({ items, customer, orderRef, countryCode }) {
  const client = getClient(countryCode);
  const preference = new Preference(client);

  const mpItems = items.map(item => ({
    id:          item.id,
    title:       item.name,
    quantity:    item.quantity || 1,
    unit_price:  toLocal(item.priceUSD, countryCode),
    currency_id: CURRENCY[countryCode] || 'ARS',
    picture_url: item.imageUrl || undefined
  }));

  const body = {
    items: mpItems,
    payer: {
      name:  customer.name,
      email: customer.email
    },
    external_reference: orderRef,
    back_urls: {
      success: `${process.env.FRONTEND_URL}/success?provider=mp&order=${orderRef}`,
      failure: `${process.env.FRONTEND_URL}/?mp_error=1`,
      pending: `${process.env.FRONTEND_URL}/pending?order=${orderRef}`
    },
    auto_return:         'approved',
    notification_url:    `${process.env.BACKEND_URL || 'https://your-api.com'}/api/webhooks/mercadopago`,
    statement_descriptor: 'ALAZAN STORE'
  };

  const result = await preference.create({ body });

  return {
    preferenceId: result.id,
    initPoint:    result.init_point,        // Production URL
    sandboxUrl:   result.sandbox_init_point // Sandbox URL
  };
}

// ── Create direct payment (card token flow) ───────────────────
// For custom payment forms (not redirect)
async function createPayment({ token, amountUSD, customer, orderRef, countryCode, installments = 1 }) {
  const client  = getClient(countryCode);
  const payment = new Payment(client);

  const body = {
    transaction_amount: toLocal(amountUSD, countryCode),
    token,
    installments,
    payment_method_id:  'visa', // will be overridden by token
    payer: {
      email: customer.email,
      identification: customer.docNumber ? {
        type:   customer.docType || 'DNI',
        number: customer.docNumber
      } : undefined
    },
    statement_descriptor: 'ALAZAN STORE',
    external_reference:   orderRef,
    notification_url:     `${process.env.BACKEND_URL || 'https://your-api.com'}/api/webhooks/mercadopago`
  };

  const result = await payment.create({ body });
  return {
    id:     result.id,
    status: result.status,           // approved | pending | rejected
    detail: result.status_detail,
    method: result.payment_method_id
  };
}

// ── Get payment by ID ─────────────────────────────────────────
async function getPayment(paymentId, countryCode) {
  const client  = getClient(countryCode);
  const payment = new Payment(client);
  return payment.get({ id: paymentId });
}

module.exports = {
  createPreference,
  createPayment,
  getPayment,
  getPublicKey,
  toLocal,
  CURRENCY
};
