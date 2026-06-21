/**
 * Stripe Connect — Marketplace (Accounts V2)
 * Welux Events Holding · seller onboarding + embedded payments
 *
 * POST /api/connect/accounts        → create connected account
 * POST /api/connect/account-links   → onboarding link for KYC
 * POST /api/connect/checkout        → checkout with transfer to seller
 * GET  /api/connect/accounts/:id    → account status
 */
const express = require('express');
const Stripe  = require('stripe');

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ── Create connected account (seller onboarding) ──────────
router.post('/accounts', async (req, res, next) => {
  try {
    const {
      display_name,
      contact_email,
      country = 'US',
      losses_collector  = 'application',
      fees_collector    = 'application'
    } = req.body;

    const account = await stripe.v2.core.accounts.create({
      configuration: {
        recipient: {
          capabilities: {
            stripe_balance: {
              stripe_transfers: { requested: true }
            }
          }
        }
      },
      display_name,
      contact_email,
      defaults: {
        responsibilities: {
          losses_collector,
          fees_collector
        }
      },
      dashboard: 'express',
      include: [
        'configuration.merchant',
        'configuration.recipient',
        'identity',
        'defaults',
        'configuration.customer'
      ],
      identity: { country }
    });

    res.json({ account_id: account.id, status: account.object });
  } catch (err) {
    next(err);
  }
});

// ── Create account link (KYC onboarding URL) ─────────────
router.post('/account-links', async (req, res, next) => {
  try {
    const { account_id, refresh_url, return_url } = req.body;

    if (!account_id) return res.status(400).json({ error: 'account_id required' });

    const link = await stripe.v2.core.accountLinks.create({
      account: account_id,
      use_case: {
        type: 'account_onboarding',
        account_onboarding: {
          configurations: ['recipient', 'merchant'],
          refresh_url: refresh_url || `${process.env.FRONTEND_URL}/onboarding/refresh`,
          return_url:  return_url  || `${process.env.FRONTEND_URL}/onboarding/return`
        }
      }
    });

    res.json({ url: link.url, expires_at: link.expires_at });
  } catch (err) {
    next(err);
  }
});

// ── Checkout session with transfer to connected account ───
router.post('/checkout', async (req, res, next) => {
  try {
    const {
      seller_account_id,
      line_items,
      currency       = 'usd',
      application_fee_amount,
      success_url    = `${process.env.FRONTEND_URL}/success`,
      cancel_url     = `${process.env.FRONTEND_URL}/cancel`
    } = req.body;

    if (!seller_account_id) return res.status(400).json({ error: 'seller_account_id required' });
    if (!line_items?.length) return res.status(400).json({ error: 'line_items required' });

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      success_url,
      cancel_url,
      line_items: line_items.map(item => ({
        price_data: {
          currency,
          product_data: { name: item.name },
          unit_amount: item.unit_amount
        },
        quantity: item.quantity || 1
      })),
      payment_intent_data: {
        application_fee_amount: application_fee_amount || 0,
        transfer_data: {
          destination: seller_account_id
        }
      }
    });

    res.json({ session_id: session.id, url: session.url });
  } catch (err) {
    next(err);
  }
});

// ── Get connected account status ──────────────────────────
router.get('/accounts/:id', async (req, res, next) => {
  try {
    const account = await stripe.v2.core.accounts.retrieve(req.params.id, {
      include: ['configuration.recipient', 'identity', 'defaults']
    });
    res.json(account);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
