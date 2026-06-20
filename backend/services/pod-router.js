/**
 * POD Router — Multi-Provider Dispatch Engine
 *
 * Routing matrix (local production, no customs):
 * ──────────────────────────────────────────────────────────────────
 *  AR → Dimona (Buenos Aires hub)
 *       → avoids ARS currency restrictions + customs
 *       → Sandbox: send "sample": true (same endpoint)
 *
 *  BR → Dimona (Brazil hub) [default] OR Reserva INK [premium fashion]
 *       → CPF mandatory (XXX.XXX.XXX-XX) in both cases
 *       → Reserva INK = INVERSE integration (Live Ink polls WooCommerce)
 *       → Sandbox Dimona: "sample": true
 *
 *  MX → Dimona (Mexico hub)
 *       → avoids USMCA 25% tariff on cross-border (2025)
 *
 *  US → Printful (Charlotte/Dallas/LA/Phoenix) [default]
 *       OR Gelato (39 US hubs) OR Printify (multiple partners)
 *       → Printful sandbox: cancel manually in dashboard
 *       → Gelato sandbox: real sandbox via Gelato Connect portal
 *
 *  CA → Printful (Mississauga) [default]
 *       OR Gelato CA
 *       → Note: Gelato CA = front+back only (no sleeves/neck labels)
 *
 * .env overrides:
 *   BR_PROVIDER=dimona|reservaink        (default: dimona)
 *   US_PROVIDER=printful|gelato|printify (default: printful)
 *   CA_PROVIDER=printful|gelato          (default: printful)
 * ──────────────────────────────────────────────────────────────────
 */

const printful   = require('./printful');
const dimona     = require('./dimona');
const gelato     = require('./gelato');
const printify   = require('./printify');
// Reserva INK uses inverse WooCommerce integration — not called directly for orders
const reservaInk = require('./reservaink');

/**
 * Resolve which POD provider handles a given country
 */
function getPodProvider(countryCode) {
  const country = (countryCode || 'US').toUpperCase();

  // LATAM → Printify (global fulfillment, no Brazil CPF requirement)
  if (country === 'AR' || country === 'MX' || country === 'BR' || country === 'CL' || country === 'CO' || country === 'PE') {
    return (process.env.LATAM_PROVIDER || 'printify').toLowerCase();
  }

  if (country === 'US') {
    return (process.env.US_PROVIDER || 'printful').toLowerCase();
  }

  if (country === 'CA') {
    return (process.env.CA_PROVIDER || 'printful').toLowerCase();
  }

  // EU / GB → Gelato
  if (['DE','FR','IT','ES','NL','BE','AT','SE','DK','NO','FI','PL','PT','IE','GB'].includes(country)) {
    return 'gelato';
  }

  // Global fallback → Printify
  return 'printify';
}

/**
 * Resolve provider module from string key
 */
function getModule(provider) {
  switch (provider) {
    case 'dimona':     return dimona;
    case 'gelato':     return gelato;
    case 'printify':   return printify;
    case 'printful':   return printful;
    case 'reservaink': return null; // inverse integration, no outgoing API
    default:           throw new Error(`Unknown POD provider: ${provider}`);
  }
}

/**
 * Get shipping rates from the correct provider for this country
 */
async function getShippingRates({ items, recipient }) {
  const provider = getPodProvider(recipient.countryCode);

  if (provider === 'reservaink') {
    // Reserva INK doesn't expose shipping quotes via API
    return { provider: 'reservaink', rates: [], note: 'Rates managed by Live Ink + WooCommerce' };
  }

  const mod = getModule(provider);
  try {
    return { provider, rates: await mod.getShippingRates({ items, recipient }) };
  } catch (err) {
    console.warn(`[POD Router] ${provider} rates failed, falling back to Printful:`, err.message);
    return { provider: 'printful_fallback', rates: await printful.getShippingRates({ items, recipient }) };
  }
}

/**
 * Create production order with the correct provider
 * Returns: { provider, orderId, raw }
 */
async function createOrder({ orderRef, customer, items, shipping }) {
  const country  = (customer.countryCode || 'US').toUpperCase();
  const provider = getPodProvider(country);

  if (provider === 'reservaink') {
    console.log(`[POD Router] ${orderRef} → Reserva INK (inverse): order will be pulled from WooCommerce`);
    return { provider: 'reservaink', orderId: null, note: 'Live Ink will pull order from WooCommerce automatically' };
  }

  console.log(`[POD Router] ${orderRef} | Country=${country} → ${provider}`);
  const mod    = getModule(provider);
  const result = await mod.createOrder({ orderRef, customer, items, shipping });

  return {
    provider,
    orderId: result.id || result.order_id || result.orderId,
    raw:     result
  };
}

/**
 * Confirm / send to production
 */
async function confirmOrder(provider, orderId) {
  if (!orderId || provider === 'reservaink') return null;
  const mod = getModule(provider);
  return mod.confirmOrder(orderId);
}

/**
 * Get order status + tracking from the correct provider
 */
async function getOrder(provider, orderId) {
  if (provider === 'reservaink') return reservaInk.getOrderTracking(orderId);
  return getModule(provider).getOrder(orderId);
}

/**
 * Full capability map per region
 */
const REGIONS = [
  {
    country:      'AR',
    name:         'Argentina',
    currency:     'ARS',
    podProvider:  'Printify',
    podEndpoint:  'https://api.printify.com/v1',
    podAuth:      'Bearer + User-Agent header',
    podSandbox:   'Cancel order manually in Printify dashboard',
    podNote:      'Fulfillment global vía Printify. Envío internacional desde hub más cercano.',
    payments:     ['MercadoPago', 'Stripe'],
    restrictions: 'Ninguna',
    deliveryDays: '7-15 días hábiles'
  },
  {
    country:      'BR',
    name:         'Brasil',
    currency:     'BRL',
    podProvider:  'Printify',
    podEndpoint:  'https://api.printify.com/v1',
    podAuth:      'Bearer + User-Agent header',
    podSandbox:   'Cancel order manually in Printify dashboard',
    podNote:      'Fulfillment global vía Printify. No requiere CPF.',
    payments:     ['MercadoPago', 'Stripe'],
    restrictions: 'Ninguna',
    deliveryDays: '7-15 días hábiles'
  },
  {
    country:      'MX',
    name:         'México',
    currency:     'MXN',
    podProvider:  'Printify',
    podEndpoint:  'https://api.printify.com/v1',
    podAuth:      'Bearer + User-Agent header',
    podSandbox:   'Cancel order manually in Printify dashboard',
    podNote:      'Fulfillment global vía Printify.',
    payments:     ['MercadoPago', 'Stripe'],
    restrictions: 'Ninguna',
    deliveryDays: '7-15 días hábiles'
  },
  {
    country:      'US',
    name:         'United States',
    currency:     'USD',
    podProvider:  process.env.US_PROVIDER === 'gelato' ? 'Gelato' : process.env.US_PROVIDER === 'printify' ? 'Printify' : 'Printful',
    podEndpoint:  {
      printful: 'https://api.printful.com',
      gelato:   'https://order.gelatoapis.com',
      printify: 'https://api.printify.com/v1'
    }[process.env.US_PROVIDER || 'printful'],
    podAuth:      {
      printful: 'Bearer (Scoped Private Token)',
      gelato:   'X-API-KEY header',
      printify: 'Bearer + mandatory User-Agent header'
    }[process.env.US_PROVIDER || 'printful'],
    podSandbox:   {
      printful: 'No sandbox — cancel order manually in Printful dashboard',
      gelato:   'Real sandbox via Gelato Connect portal (Sandbox Customer)',
      printify: 'No sandbox — cancel order manually in Printify dashboard'
    }[process.env.US_PROVIDER || 'printful'],
    podNote:      'Multiple fulfillment centers: Charlotte, Dallas, LA, Phoenix.',
    payments:     ['Stripe'],
    restrictions: 'None',
    deliveryDays: '2-5 business days'
  },
  {
    country:      'CA',
    name:         'Canada',
    currency:     'CAD',
    podProvider:  process.env.CA_PROVIDER === 'gelato' ? 'Gelato' : 'Printful',
    podEndpoint:  process.env.CA_PROVIDER === 'gelato' ? 'https://order.gelatoapis.com' : 'https://api.printful.com',
    podAuth:      process.env.CA_PROVIDER === 'gelato' ? 'X-API-KEY header' : 'Bearer (Scoped Private Token)',
    podSandbox:   process.env.CA_PROVIDER === 'gelato'
      ? 'Real sandbox via Gelato Connect portal'
      : 'No sandbox — cancel manually in Printful dashboard',
    podNote:      'Hub Mississauga (Ontario). Catálogo reducido vs US — puede redirigir a hub US.',
    payments:     ['Stripe'],
    restrictions: process.env.CA_PROVIDER === 'gelato'
      ? 'Gelato CA: front+back only — NO sleeves, NO neck labels'
      : 'Algunos SKUs de baja rotación se producen en USA (posibles aranceles)',
    deliveryDays: '3-7 business days'
  }
];

module.exports = {
  getPodProvider,
  getShippingRates,
  createOrder,
  confirmOrder,
  getOrder,
  REGIONS
};
