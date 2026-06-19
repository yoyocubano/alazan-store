const express    = require('express');
const router     = express.Router();
const printful   = require('../services/printful');
const podRouter  = require('../services/pod-router');

function adminAuth(req, res, next) {
  const key = req.headers['x-admin-key'];
  if (key !== process.env.ADMIN_KEY) return res.status(401).json({ error: 'Unauthorized' });
  next();
}

// ── GET /api/pod/products ─────────────────────────────────────
// List all synced products in Printful store
router.get('/products', adminAuth, async (req, res, next) => {
  try {
    const products = await printful.getStoreProducts();
    res.json({ products });
  } catch (err) {
    next(err);
  }
});

// ── POST /api/pod/products/sync ───────────────────────────────
// Sync a new product to Printful store
// Body: { name, garmentType, graphicUrl }
router.post('/products/sync', adminAuth, async (req, res, next) => {
  try {
    const { name, garmentType, graphicUrl } = req.body;

    if (!name || !garmentType || !graphicUrl) {
      return res.status(400).json({ error: 'name, garmentType, graphicUrl required' });
    }

    const productId = {
      tshirt:      process.env.PRINTFUL_TSHIRT_ID      || '71',
      sweatshirt:  process.env.PRINTFUL_SWEATSHIRT_ID  || '378',
      hoodie:      process.env.PRINTFUL_HOODIE_ID      || '146',
      kids_tshirt: process.env.PRINTFUL_KIDS_TSHIRT_ID || '200'
    }[garmentType];

    if (!productId) return res.status(400).json({ error: `Unknown garmentType: ${garmentType}` });

    const result = await printful.syncProduct({
      name, garmentType, graphicUrl,
      baseProductId: productId
    });

    res.json({ synced: true, product: result });
  } catch (err) {
    next(err);
  }
});

// ── GET /api/pod/variants/:garmentType ───────────────────────
// Returns available size variants for a garment type
router.get('/variants/:garmentType', (req, res) => {
  const { garmentType } = req.params;
  const sizes = printful.VARIANT_SIZE_MAP[garmentType];
  if (!sizes) return res.status(400).json({ error: `Unknown garmentType: ${garmentType}` });
  res.json({
    garmentType,
    sizes: Object.keys(sizes),
    variantIds: sizes
  });
});

// ── GET /api/pod/regions ──────────────────────────────────────
// Returns accurate provider routing per region (from pod-router.js)
router.get('/regions', (req, res) => {
  res.json({ regions: podRouter.REGIONS });
});

// ── GET /api/pod/order/:printfulId ────────────────────────────
router.get('/order/:printfulId', adminAuth, async (req, res, next) => {
  try {
    const order = await printful.getOrder(req.params.printfulId);
    res.json({ order });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
