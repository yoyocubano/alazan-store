require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const checkoutRoutes = require('./routes/checkout');
const ordersRoutes   = require('./routes/orders');
const podRoutes      = require('./routes/pod');
const webhookRoutes  = require('./routes/webhooks');
const connectRoutes  = require('./routes/connect');

const app = express();
const PORT = process.env.PORT || 3001;

// ── Security ─────────────────────────────────────────────
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev'));

// Rate limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use('/api/', limiter);

// CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8080',
  credentials: true
}));

// ── Body parsing ──────────────────────────────────────────
// Webhooks need raw body — mount BEFORE json()
app.use('/api/webhooks', webhookRoutes);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ── Routes ────────────────────────────────────────────────
app.use('/api/checkout', checkoutRoutes);
app.use('/api/orders',   ordersRoutes);
app.use('/api/pod',      podRoutes);
app.use('/api/connect',  connectRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    providers: {
      stripe:      !!process.env.STRIPE_SECRET_KEY,
      mercadopago: !!process.env.MP_AR_ACCESS_TOKEN,
      printful:    !!process.env.PRINTFUL_API_KEY
    }
  });
});

// ── Global error handler ──────────────────────────────────
app.use((err, req, res, next) => {
  console.error('[ERROR]', err.message, err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

app.listen(PORT, () => {
  console.log(`✅ Alazan Store API running on http://localhost:${PORT}`);
  console.log(`   Stripe:       ${process.env.STRIPE_SECRET_KEY ? '✓' : '✗ NOT SET'}`);
  console.log(`   MercadoPago:  ${process.env.MP_AR_ACCESS_TOKEN ? '✓' : '✗ NOT SET'}`);
  console.log(`   Printful:     ${process.env.PRINTFUL_API_KEY ? '✓' : '✗ NOT SET'}`);
});

module.exports = app;
