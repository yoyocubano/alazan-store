/**
 * POD Router — Multi-Provider Dispatch Engine
 *
 * Routing matrix (based on research: no customs, local production):
 * ──────────────────────────────────────────────────────────────────
 *  AR → Dimona (Buenos Aires hub) — avoids customs & ARS restrictions
 *  BR → Dimona (Brazil) as primary, Reserva INK as premium alt
 *       → CPF mandatory (XXX.XXX.XXX-XX) in both cases
 *  MX → Dimona (Mexico hub) — avoids 2025 tariffs on cross-border
 *  US → Printful (Charlotte/Dallas/LA/Phoenix hubs)
 *  CA → Printful (Mississauga hub) — falls back to US if SKU missing
 *
 * Provider priority config (overrideable via env):
 *  DIMONA_COUNTRIES=AR,BR,MX   (default)
 *  PRINTFUL_COUNTRIES=US,CA    (default)
 *  BR_PROVIDER=dimona|reservaink (default: dimona)
 * ──────────────────────────────────────────────────────────────────
 */

const printful  = require('./printful');
const dimona    = require('./dimona');
const reservaInk = require('./reservaink');

// Country → primary POD provider mapping
function getPodProvider(countryCode) {
  const country = (countryCode || 'US').toUpperCase();

  // Brazil: check env override for premium fashion (Reserva INK)
  if (country === 'BR') {
    const brProvider = (process.env.BR_PROVIDER || 'dimona').toLowerCase();
    return brProvider === 'reservaink' ? 'reservaink' : 'dimona';
  }

  // Argentina & Mexico: always Dimona (local production, no customs)
  if (['AR', 'MX'].includes(country)) return 'dimona';

  // US & Canada: Printful
  if (['US', 'CA'].includes(country)) return 'printful';

  // Fallback: Printful (covers most international shipping)
  return 'printful';
}

/**
 * Get shipping rates from the correct provider for this country
 */
async function getShippingRates({ items, recipient }) {
  const provider = getPodProvider(recipient.countryCode);

  try {
    switch (provider) {
      case 'dimona':     return { provider: 'dimona',     rates: await dimona.getShippingRates({ items, recipient }) };
      case 'reservaink': return { provider: 'reservaink', rates: await reservaInk.getShippingRates({ items, recipient }) };
      case 'printful':   return { provider: 'printful',   rates: await printful.getShippingRates({ items, recipient }) };
    }
  } catch (err) {
    // Fallback to Printful if primary provider fails
    console.warn(`[POD Router] ${provider} shipping rates failed, falling back to Printful:`, err.message);
    return { provider: 'printful_fallback', rates: await printful.getShippingRates({ items, recipient }) };
  }
}

/**
 * Create production order with the correct provider for this country
 * Returns: { provider, orderId, raw }
 */
async function createOrder({ orderRef, customer, items, shipping }) {
  const country  = (customer.countryCode || 'US').toUpperCase();
  const provider = getPodProvider(country);

  console.log(`[POD Router] Country=${country} → Provider=${provider} | Ref=${orderRef}`);

  // ── Brazil CPF enforcement ─────────────────────────────────
  // Both Dimona-BR and Reserva INK require CPF for Correios labels
  if (country === 'BR' && !customer.cpf) {
    throw new Error('CPF is required for orders in Brazil (format: XXX.XXX.XXX-XX)');
  }

  let result;

  switch (provider) {
    case 'dimona': {
      result = await dimona.createOrder({ orderRef, customer, items, shipping });
      return {
        provider:      'dimona',
        orderId:       result.id || result.order_id,
        trackingCode:  null,
        raw:           result
      };
    }

    case 'reservaink': {
      result = await reservaInk.createOrder({ orderRef, customer, items });
      return {
        provider:     'reservaink',
        orderId:      result.id || result.order_id,
        trackingCode: null,
        raw:          result
      };
    }

    case 'printful': {
      result = await printful.createOrder({ orderRef, customer, items, shipping });
      return {
        provider:     'printful',
        orderId:      result.id,
        trackingCode: null,
        raw:          result
      };
    }

    default:
      throw new Error(`Unknown POD provider: ${provider}`);
  }
}

/**
 * Confirm/submit order for production
 */
async function confirmOrder(provider, orderId) {
  switch (provider) {
    case 'dimona':     return dimona.confirmOrder(orderId);
    case 'reservaink': return reservaInk.confirmOrder(orderId);
    case 'printful':   return printful.confirmOrder(orderId);
    default: throw new Error(`Unknown POD provider: ${provider}`);
  }
}

/**
 * Get order status + tracking from the correct provider
 */
async function getOrder(provider, orderId) {
  switch (provider) {
    case 'dimona':     return dimona.getOrder(orderId);
    case 'reservaink': return reservaInk.getOrder(orderId);
    case 'printful':   return printful.getOrder(orderId);
    default: throw new Error(`Unknown POD provider: ${provider}`);
  }
}

/**
 * Full provider capability map — used by /api/pod/regions
 */
const REGIONS = [
  {
    country:  'AR',
    name:     'Argentina',
    currency: 'ARS',
    podProvider: 'Dimona',
    podNote:  'Producción local en Buenos Aires. Sin aduanas, sin retenciones cambiarias.',
    payments: ['MercadoPago'],
    shipping: 'Distribución nacional desde hub Buenos Aires',
    restrictions: 'Sin restricciones de importación — manufactura 100% local',
    deliveryDays: '3-7 días hábiles'
  },
  {
    country:  'BR',
    name:     'Brasil',
    currency: 'BRL',
    podProvider: process.env.BR_PROVIDER === 'reservaink' ? 'Reserva INK (Live Ink)' : 'Dimona',
    podNote:  'CPF obligatorio (XXX.XXX.XXX-XX) para despacho por Correios.',
    payments: ['MercadoPago', 'Stripe'],
    shipping: 'Producción nacional + Correios / transportadoras privadas',
    restrictions: 'CPF requerido en checkout',
    deliveryDays: '3-8 días hábiles'
  },
  {
    country:  'MX',
    name:     'México',
    currency: 'MXN',
    podProvider: 'Dimona',
    podNote:  'Hub local. Evita aranceles T-MEC 25% por producción en territorio MX.',
    payments: ['MercadoPago', 'Stripe'],
    shipping: 'Distribución nacional desde hub México',
    restrictions: 'Producción local. Sin exposición a aranceles USMCA 2025.',
    deliveryDays: '2-5 días hábiles'
  },
  {
    country:  'US',
    name:     'United States',
    currency: 'USD',
    podProvider: 'Printful',
    podNote:  'Multiple fulfillment centers: Charlotte, Dallas, LA, Phoenix.',
    payments: ['Stripe'],
    shipping: 'USPS, FedEx, UPS domestic',
    restrictions: 'None',
    deliveryDays: '2-5 business days'
  },
  {
    country:  'CA',
    name:     'Canada',
    currency: 'CAD',
    podProvider: 'Printful',
    podNote:  'Hub Mississauga (Ontario). Catálogo reducido vs US — puede redirigir a hub US.',
    payments: ['Stripe'],
    shipping: 'Canada Post, UPS domestic',
    restrictions: 'Algunos SKUs de baja rotación se producen en USA (posibles aranceles menores)',
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
