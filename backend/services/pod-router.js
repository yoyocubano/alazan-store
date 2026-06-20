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

  if (country === 'AR') return 'dimona';
  if (country === 'MX') return 'dimona';

  if (country === 'BR') {
    const p = (process.env.BR_PROVIDER || 'dimona').toLowerCase();
    // reservaink = inverse integration (handled by WooCommerce, not this router)
    return p === 'reservaink' ? 'reservaink' : 'dimona';
  }

  if (country === 'US') {
    return (process.env.US_PROVIDER || 'printful').toLowerCase();
  }

  if (country === 'CA') {
    return (process.env.CA_PROVIDER || 'printful').toLowerCase();
  }

  // International fallback: Printful ships globally
  return 'printful';
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

  // CPF enforcement for Brazil
  if (country === 'BR' && !customer.cpf) {
    throw new Error('CPF is required for orders in Brazil (format: XXX.XXX.XXX-XX)');
  }

  // Reserva INK = inverse integration: order must exist in WooCommerce
  // Live Ink pulls it automatically — nothing to call here
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
    podProvider:  'Dimona',
    podEndpoint:  'https://api.dimonatee.com/api/v2021',
    podAuth:      'Bearer Token',
    podSandbox:   'Send "sample": true in payload — same endpoint',
    podNote:      'Producción local en Buenos Aires. Sin aduanas, sin retenciones cambiarias.',
    payments:     ['MercadoPago'],
    restrictions: 'Sin restricciones de importación — manufactura 100% local',
    deliveryDays: '3-7 días hábiles'
  },
  {
    country:      'BR',
    name:         'Brasil',
    currency:     'BRL',
    podProvider:  process.env.BR_PROVIDER === 'reservaink' ? 'Reserva INK (Live Ink)' : 'Dimona',
    podEndpoint:  process.env.BR_PROVIDER === 'reservaink'
      ? 'Inverse — Live Ink polls your WooCommerce REST API'
      : 'https://api.dimonatee.com/api/v2021',
    podAuth:      process.env.BR_PROVIDER === 'reservaink'
      ? 'WordPress OAuth (authorize via live.ink dashboard)'
      : 'Bearer Token',
    podSandbox:   process.env.BR_PROVIDER === 'reservaink'
      ? 'Use Reserva INK test store in live.ink dashboard'
      : 'Send "sample": true in payload',
    podNote:      'CPF obligatorio (XXX.XXX.XXX-XX) para despacho por Correios.',
    payments:     ['MercadoPago', 'Stripe'],
    restrictions: 'CPF requerido en checkout',
    deliveryDays: '3-8 días hábiles'
  },
  {
    country:      'MX',
    name:         'México',
    currency:     'MXN',
    podProvider:  'Dimona',
    podEndpoint:  'https://api.dimonatee.com/api/v2021',
    podAuth:      'Bearer Token',
    podSandbox:   'Send "sample": true in payload',
    podNote:      'Hub local. Evita arancel USMCA 25% por producción en territorio MX.',
    payments:     ['MercadoPago', 'Stripe'],
    restrictions: 'Producción local. Sin exposición a aranceles USMCA 2025.',
    deliveryDays: '2-5 días hábiles'
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
