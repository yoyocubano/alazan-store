const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST || 'smtp.gmail.com',
  port:   parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

async function sendOrderConfirmation({ customer, order }) {
  const itemsHtml = order.items.map(i => `
    <tr>
      <td style="padding:8px;border-bottom:1px solid #eee">${i.name}</td>
      <td style="padding:8px;border-bottom:1px solid #eee;text-align:center">${i.color} · ${i.size || 'M'}</td>
      <td style="padding:8px;border-bottom:1px solid #eee;text-align:right">$${i.priceUSD.toFixed(2)}</td>
    </tr>
  `).join('');

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#111">
      <div style="background:#000;padding:24px;text-align:center">
        <h1 style="color:#fff;font-family:serif;letter-spacing:0.2em;margin:0">ALAZAN</h1>
        <p style="color:#ccc;margin:4px 0 0;font-size:12px;letter-spacing:0.15em">ELITE GAMING APPAREL</p>
      </div>

      <div style="padding:32px">
        <h2 style="font-size:20px;margin-bottom:8px">Order Confirmed ✓</h2>
        <p style="color:#555">Hi ${customer.name}, your order <strong>#${order.ref}</strong> is confirmed and sent to production.</p>

        <table style="width:100%;border-collapse:collapse;margin:24px 0">
          <thead>
            <tr style="background:#f5f5f5">
              <th style="padding:8px;text-align:left;font-size:12px;text-transform:uppercase">Product</th>
              <th style="padding:8px;text-align:center;font-size:12px;text-transform:uppercase">Details</th>
              <th style="padding:8px;text-align:right;font-size:12px;text-transform:uppercase">Price</th>
            </tr>
          </thead>
          <tbody>${itemsHtml}</tbody>
          <tfoot>
            <tr>
              <td colspan="2" style="padding:12px 8px;font-weight:bold">Total</td>
              <td style="padding:12px 8px;text-align:right;font-weight:bold">$${order.totalUSD.toFixed(2)} USD</td>
            </tr>
          </tfoot>
        </table>

        <div style="background:#f9f9f9;padding:16px;border-radius:8px;margin-bottom:24px">
          <p style="margin:0 0 4px;font-weight:bold;font-size:14px">Shipping to:</p>
          <p style="margin:0;color:#555;font-size:14px">${customer.address}, ${customer.city}, ${customer.postalCode} — ${customer.countryCode}</p>
        </div>

        ${order.trackingNumber ? `
        <div style="background:#000;color:#fff;padding:16px;border-radius:8px;text-align:center">
          <p style="margin:0 0 4px;font-size:12px;text-transform:uppercase;letter-spacing:0.1em">Tracking Number</p>
          <p style="margin:0;font-size:20px;font-family:monospace;letter-spacing:0.2em">${order.trackingNumber}</p>
        </div>
        ` : ''}

        <p style="margin-top:32px;color:#888;font-size:12px;text-align:center">
          Questions? Contact us at <a href="mailto:info@alazanstore.shop" style="color:#000">info@alazanstore.shop</a>
        </p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from:    `"Alazan Store" <${process.env.SMTP_USER}>`,
    to:      customer.email,
    subject: `Order Confirmed #${order.ref} — Alazan Store`,
    html
  });
}

async function sendShippingUpdate({ customer, order, trackingUrl }) {
  await transporter.sendMail({
    from:    `"Alazan Store" <${process.env.SMTP_USER}>`,
    to:      customer.email,
    subject: `Your order is on its way! #${order.ref}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#111;padding:32px">
        <h1 style="font-family:serif;letter-spacing:0.2em">ALAZAN</h1>
        <h2>Your order is shipped! 🚀</h2>
        <p>Order <strong>#${order.ref}</strong> is on its way to ${customer.name}.</p>
        ${trackingUrl ? `<a href="${trackingUrl}" style="display:inline-block;background:#000;color:#fff;padding:12px 24px;border-radius:4px;text-decoration:none;margin-top:16px">Track Your Order</a>` : ''}
      </div>
    `
  });
}

module.exports = { sendOrderConfirmation, sendShippingUpdate };
