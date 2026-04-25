const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Order = require('../models/Order');

// Konfigurimi i transporter-it
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// HTML template per emailin e porosise
const buildOrderEmailHTML = (order) => {
  const itemsRows = order.items
    .map(
      (item) => `
      <tr>
        <td style="padding:10px;border-bottom:1px solid #eee;">${item.name}</td>
        <td style="padding:10px;border-bottom:1px solid #eee;">${item.brand || ''} ${item.model || ''}</td>
        <td style="padding:10px;border-bottom:1px solid #eee;">${item.partNumber || '-'}</td>
        <td style="padding:10px;border-bottom:1px solid #eee;text-align:center;">${item.quantity}</td>
        <td style="padding:10px;border-bottom:1px solid #eee;text-align:right;">${item.price.toFixed(2)} €</td>
        <td style="padding:10px;border-bottom:1px solid #eee;text-align:right;font-weight:bold;">${(item.price * item.quantity).toFixed(2)} €</td>
      </tr>
    `
    )
    .join('');

  return `
  <!DOCTYPE html>
  <html lang="sq">
  <head>
    <meta charset="UTF-8"/>
    <title>Porosi e Re - Auto Cimi</title>
  </head>
  <body style="font-family:Arial,sans-serif;background:#f5f5f5;margin:0;padding:20px;">
    <div style="max-width:680px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%);padding:30px;text-align:center;">
        <h1 style="color:#e94560;margin:0;font-size:28px;letter-spacing:2px;">AUTO CIMI</h1>
        <p style="color:#a0aec0;margin:8px 0 0;font-size:14px;">Porosi e Re - ${order.orderNumber}</p>
      </div>

      <!-- Content -->
      <div style="padding:30px;">
        <h2 style="color:#1a1a2e;border-bottom:2px solid #e94560;padding-bottom:10px;">Të Dhënat e Klientit</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <tr>
            <td style="padding:8px;color:#666;width:140px;"><strong>Emri:</strong></td>
            <td style="padding:8px;color:#1a1a2e;">${order.customer.name}</td>
          </tr>
          <tr>
            <td style="padding:8px;color:#666;"><strong>Email:</strong></td>
            <td style="padding:8px;color:#1a1a2e;">${order.customer.email}</td>
          </tr>
          <tr>
            <td style="padding:8px;color:#666;"><strong>Telefon:</strong></td>
            <td style="padding:8px;color:#1a1a2e;">${order.customer.phone}</td>
          </tr>
          <tr>
            <td style="padding:8px;color:#666;"><strong>Adresa:</strong></td>
            <td style="padding:8px;color:#1a1a2e;">${order.customer.address}, ${order.customer.city}</td>
          </tr>
          ${order.customer.notes ? `<tr><td style="padding:8px;color:#666;"><strong>Shënime:</strong></td><td style="padding:8px;color:#1a1a2e;">${order.customer.notes}</td></tr>` : ''}
        </table>

        <h2 style="color:#1a1a2e;border-bottom:2px solid #e94560;padding-bottom:10px;">Artikujt e Porosisë</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <thead>
            <tr style="background:#f8f9fa;">
              <th style="padding:10px;text-align:left;color:#666;">Pjesa</th>
              <th style="padding:10px;text-align:left;color:#666;">Makina</th>
              <th style="padding:10px;text-align:left;color:#666;">Kodi</th>
              <th style="padding:10px;text-align:center;color:#666;">Sasia</th>
              <th style="padding:10px;text-align:right;color:#666;">Çmimi</th>
              <th style="padding:10px;text-align:right;color:#666;">Totali</th>
            </tr>
          </thead>
          <tbody>
            ${itemsRows}
          </tbody>
          <tfoot>
            <tr style="background:#1a1a2e;">
              <td colspan="5" style="padding:12px;color:#a0aec0;font-weight:bold;font-size:16px;">TOTALI I POROSISË</td>
              <td style="padding:12px;color:#e94560;font-weight:bold;font-size:18px;text-align:right;">${order.totalAmount.toFixed(2)} €</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- Footer -->
      <div style="background:#f8f9fa;padding:20px;text-align:center;border-top:1px solid #eee;">
        <p style="color:#666;margin:0;font-size:13px;">Auto Cimi • Pjesë Këmbimi për Makina Franceze & Hyundai</p>
        <p style="color:#999;margin:8px 0 0;font-size:12px;">Ky email u gjenerua automatikisht nga sistemi i porosive.</p>
      </div>
    </div>
  </body>
  </html>
  `;
};

// Email konfirmimi per klientin
const buildConfirmationEmailHTML = (order) => `
<!DOCTYPE html>
<html lang="sq">
<head><meta charset="UTF-8"/><title>Konfirmim Porosie - Auto Cimi</title></head>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;margin:0;padding:20px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);">
    <div style="background:linear-gradient(135deg,#1a1a2e,#0f3460);padding:30px;text-align:center;">
      <h1 style="color:#e94560;margin:0;font-size:28px;">AUTO CIMI</h1>
      <p style="color:#a0aec0;margin:8px 0 0;">Faleminderit për porosinë tuaj!</p>
    </div>
    <div style="padding:30px;">
      <p style="color:#1a1a2e;font-size:16px;">Pershendetje <strong>${order.customer.name}</strong>,</p>
      <p style="color:#555;">Porosia juaj me numrin <strong style="color:#e94560;">${order.orderNumber}</strong> u pranua me sukses!</p>
      <p style="color:#555;">Do t'ju kontaktojmë së shpejti për konfirmimin dhe dërgimin e porosisë.</p>
      <div style="background:#f8f9fa;border-left:4px solid #e94560;padding:16px;margin:20px 0;border-radius:4px;">
        <p style="margin:0;color:#666;font-size:14px;">📦 Totali i porosisë: <strong style="color:#1a1a2e;">${order.totalAmount.toFixed(2)} €</strong></p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;">📋 Nr. Porosisë: <strong style="color:#e94560;">${order.orderNumber}</strong></p>
      </div>
      <p style="color:#555;">Na kontaktoni në çdo kohë nëse keni pyetje.</p>
    </div>
    <div style="background:#f8f9fa;padding:20px;text-align:center;border-top:1px solid #eee;">
      <p style="color:#666;margin:0;font-size:13px;">Auto Cimi • Pjesë Këmbimi Profesionale</p>
    </div>
  </div>
</body>
</html>
`;

// POST /api/orders - krijo porosi te re
router.post('/', async (req, res) => {
  try {
    const { customer, items, totalAmount } = req.body;

    if (!customer || !items || items.length === 0) {
      return res.status(400).json({ message: 'Të dhënat janë të pakompletuara' });
    }

    const order = new Order({ customer, items, totalAmount });
    await order.save();

    // Dërgo emailat
    try {
      const transporter = createTransporter();

      // Email për biznesin
      await transporter.sendMail({
        from: `"Auto Cimi System" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: `🚗 Porosi e Re ${order.orderNumber} - ${customer.name}`,
        html: buildOrderEmailHTML(order),
      });

      // Email konfirmimi për klientin
      await transporter.sendMail({
        from: `"Auto Cimi" <${process.env.EMAIL_USER}>`,
        to: customer.email,
        subject: `Konfirmim Porosie - ${order.orderNumber} | Auto Cimi`,
        html: buildConfirmationEmailHTML(order),
      });
    } catch (emailErr) {
      console.error('Email dërgimi dështoi:', emailErr.message);
      // Porosia ruhet edhe nëse email dështon
    }

    res.status(201).json({
      message: 'Porosia u pranua me sukses!',
      orderNumber: order.orderNumber,
      orderId: order._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Gabim serveri', error: err.message });
  }
});

// GET /api/orders - listo te gjitha (admin)
router.get('/', async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const query = status ? { status } : {};
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const total = await Order.countDocuments(query);
    const orders = await Order.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    res.json({ orders, total, page: parseInt(page), pages: Math.ceil(total / parseInt(limit)) });
  } catch (err) {
    res.status(500).json({ message: 'Gabim serveri', error: err.message });
  }
});

// GET /api/orders/:id
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Porosia nuk u gjet' });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: 'Gabim serveri', error: err.message });
  }
});

// PATCH /api/orders/:id/status - perditeso statusin
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!order) return res.status(404).json({ message: 'Porosia nuk u gjet' });
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: 'Gabim perditesimi', error: err.message });
  }
});

module.exports = router;
