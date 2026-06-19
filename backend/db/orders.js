// Lightweight JSON file DB — swap for PostgreSQL/MongoDB in production
const fs   = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const DB_PATH = path.join(__dirname, 'orders.json');

function readDB() {
  if (!fs.existsSync(DB_PATH)) return { orders: [] };
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// ── Create order ──────────────────────────────────────────────
function createOrder({ customer, items, totalUSD, currency, countryCode, paymentProvider }) {
  const db    = readDB();
  const order = {
    id:              uuidv4(),
    ref:             `ALZ-${Date.now().toString(36).toUpperCase()}`,
    createdAt:       new Date().toISOString(),
    updatedAt:       new Date().toISOString(),
    status:          'pending_payment', // pending_payment | paid | in_production | shipped | delivered
    paymentProvider, // stripe | mercadopago
    paymentId:       null,
    printfulOrderId: null,
    trackingNumber:  null,
    customer,
    items,
    totalUSD,
    currency,
    countryCode
  };
  db.orders.push(order);
  writeDB(db);
  return order;
}

// ── Update order fields ───────────────────────────────────────
function updateOrder(id, fields) {
  const db  = readDB();
  const idx = db.orders.findIndex(o => o.id === id || o.ref === id);
  if (idx === -1) throw new Error(`Order not found: ${id}`);
  db.orders[idx] = { ...db.orders[idx], ...fields, updatedAt: new Date().toISOString() };
  writeDB(db);
  return db.orders[idx];
}

// ── Getters ───────────────────────────────────────────────────
function getOrderById(id) {
  return readDB().orders.find(o => o.id === id || o.ref === id) || null;
}

function getOrderByPaymentId(paymentId) {
  return readDB().orders.find(o => o.paymentId === paymentId) || null;
}

function getAllOrders({ status, limit = 50, offset = 0 } = {}) {
  let { orders } = readDB();
  if (status) orders = orders.filter(o => o.status === status);
  return orders.slice(offset, offset + limit);
}

module.exports = {
  createOrder,
  updateOrder,
  getOrderById,
  getOrderByPaymentId,
  getAllOrders
};
