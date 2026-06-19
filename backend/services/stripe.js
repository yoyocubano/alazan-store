const Stripe = require('stripe');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// ── Countries supported via Stripe ───────────────────────────
// US, CA, MX — Stripe has full support
// AR/BR — Stripe works but MP is preferred for local payment methods

// ── Create Payment Intent ─────────────────────────────────────
// Returns client_secret for frontend to confirm with card element
async function createPaymentIntent({ amountUSD, currency = 'usd', metadata = {} }) {
  const amountCents = Math.round(amountUSD * 100);

  const intent = await stripe.paymentIntents.create({
    amount:   amountCents,
    currency: currency.toLowerCase(),
    automatic_payment_methods: { enabled: true },
    metadata: {
      store:   'alazan',
      ...metadata
    }
  });

  return {
    clientSecret:    intent.client_secret,
    paymentIntentId: intent.id,
    amount:          intent.amount,
    currency:        intent.currency
  };
}

// ── Create Checkout Session (redirect-based) ──────────────────
async function createCheckoutSession({ lineItems, customer, orderRef, successUrl, cancelUrl }) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems.map(item => ({
      price_data: {
        currency:     'usd',
        product_data: {
          name:   item.name,
          images: item.imageUrl ? [item.imageUrl] : []
        },
        unit_amount: Math.round(item.priceUSD * 100)
      },
      quantity: item.quantity || 1
    })),
    mode:            'payment',
    customer_email:  customer.email,
    success_url:     successUrl || `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:      cancelUrl  || `${process.env.FRONTEND_URL}/?cancelled=1`,
    metadata: {
      orderRef,
      customerName: customer.name
    },
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'MX', 'AR', 'BR', 'GB', 'FR', 'DE', 'ES']
    }
  });

  return { sessionId: session.id, url: session.url };
}

// ── Retrieve session after success ───────────────────────────
async function getCheckoutSession(sessionId) {
  return stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['payment_intent', 'line_items']
  });
}

// ── Verify webhook signature ──────────────────────────────────
function constructWebhookEvent(rawBody, signature) {
  return stripe.webhooks.constructEvent(
    rawBody,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET
  );
}

module.exports = {
  createPaymentIntent,
  createCheckoutSession,
  getCheckoutSession,
  constructWebhookEvent
};
