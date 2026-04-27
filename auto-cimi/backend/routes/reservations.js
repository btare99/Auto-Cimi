const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Reservation = require('../models/Reservation');

// Konfigurimi i transporter-it
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      servername: 'smtp.gmail.com'
    }
  });
};

// HTML template per emailin e rezervimit (per biznesin)
const buildReservationEmailHTML = (reservation) => {
  return `
  <!DOCTYPE html>
  <html lang="sq">
  <head>
    <meta charset="UTF-8"/>
    <title>Rezervim i Ri - Auto Cimi</title>
  </head>
  <body style="font-family:Arial,sans-serif;background:#f5f5f5;margin:0;padding:20px;">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);">
      <div style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%);padding:30px;text-align:center;">
        <h1 style="color:#e94560;margin:0;font-size:28px;letter-spacing:2px;">AUTO CIMI</h1>
        <p style="color:#a0aec0;margin:8px 0 0;font-size:14px;">Rezervim i Ri Makine - ${reservation.reservationNumber}</p>
      </div>
      <div style="padding:30px;">
        <h2 style="color:#1a1a2e;border-bottom:2px solid #e94560;padding-bottom:10px;">Të Dhënat e Klientit</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <tr><td style="padding:8px;color:#666;width:140px;"><strong>Emri:</strong></td><td style="padding:8px;color:#1a1a2e;">${reservation.customer.name}</td></tr>
          <tr><td style="padding:8px;color:#666;"><strong>Email:</strong></td><td style="padding:8px;color:#1a1a2e;">${reservation.customer.email}</td></tr>
          <tr><td style="padding:8px;color:#666;"><strong>Telefon:</strong></td><td style="padding:8px;color:#1a1a2e;">${reservation.customer.phone}</td></tr>
          ${reservation.customer.notes ? `<tr><td style="padding:8px;color:#666;"><strong>Shënime:</strong></td><td style="padding:8px;color:#1a1a2e;">${reservation.customer.notes}</td></tr>` : ''}
        </table>

        <h2 style="color:#1a1a2e;border-bottom:2px solid #e94560;padding-bottom:10px;">Makina e Rezervuar</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          <tr><td style="padding:8px;color:#666;width:140px;"><strong>Modeli:</strong></td><td style="padding:8px;color:#1a1a2e;">${reservation.car.brand} ${reservation.car.model}</td></tr>
          <tr><td style="padding:8px;color:#666;"><strong>Data e Pritshme:</strong></td><td style="padding:8px;color:#1a1a2e;">${reservation.car.expectedDate}</td></tr>
        </table>
      </div>
      <div style="background:#f8f9fa;padding:20px;text-align:center;border-top:1px solid #eee;">
        <p style="color:#666;margin:0;font-size:13px;">Auto Cimi System</p>
      </div>
    </div>
  </body>
  </html>
  `;
};

// Email konfirmimi per klientin
const buildConfirmationEmailHTML = (reservation) => `
<!DOCTYPE html>
<html lang="sq">
<head><meta charset="UTF-8"/><title>Konfirmim Rezervimi - Auto Cimi</title></head>
<body style="font-family:Arial,sans-serif;background:#f5f5f5;margin:0;padding:20px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);">
    <div style="background:linear-gradient(135deg,#1a1a2e,#0f3460);padding:30px;text-align:center;">
      <h1 style="color:#e94560;margin:0;font-size:28px;">AUTO CIMI</h1>
      <p style="color:#a0aec0;margin:8px 0 0;">Rezervimi juaj u pranua!</p>
    </div>
    <div style="padding:30px;">
      <p style="color:#1a1a2e;font-size:16px;">Përshëndetje <strong>${reservation.customer.name}</strong>,</p>
      <p style="color:#555;">Kërkesa juaj për rezervimin e makinës <strong>${reservation.car.brand} ${reservation.car.model}</strong> u regjistrua me sukses.</p>
      <p style="color:#555;">Nr. i Rezervimit tuaj është: <strong style="color:#e94560;">${reservation.reservationNumber}</strong></p>
      <p style="color:#555;">Ekipi ynë do t'ju kontaktojë së shpejti për t'ju dhënë më shumë detaje rreth makinës dhe kohës së mbërritjes.</p>
      <p style="color:#555;">Faleminderit që zgjodhët Auto Cimi!</p>
    </div>
    <div style="background:#f8f9fa;padding:20px;text-align:center;border-top:1px solid #eee;">
      <p style="color:#666;margin:0;font-size:13px;">Auto Cimi • Pjesë Këmbimi & Makina</p>
    </div>
  </div>
</body>
</html>
`;

// POST /api/reservations
router.post('/', async (req, res) => {
  try {
    const { customer, car } = req.body;

    if (!customer || !car || !customer.name || !customer.email || !customer.phone) {
      return res.status(400).json({ message: 'Të dhënat janë të pakompletuara' });
    }

    const reservation = new Reservation({ customer, car });
    await reservation.save();

    // Dërgo emailat
    try {
      const transporter = createTransporter();

      // Email për biznesin
      await transporter.sendMail({
        from: `"Auto Cimi System" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `📅 Rezervim i Ri ${reservation.reservationNumber} - ${customer.name}`,
        html: buildReservationEmailHTML(reservation),
      });

      // Email konfirmimi për klientin
      await transporter.sendMail({
        from: `"Auto Cimi" <${process.env.EMAIL_USER}>`,
        to: customer.email,
        subject: `Konfirmim Rezervimi - ${reservation.car.brand} ${reservation.car.model} | Auto Cimi`,
        html: buildConfirmationEmailHTML(reservation),
      });
    } catch (emailErr) {
      console.error('Email dërgimi dështoi:', emailErr.message);
    }

    res.status(201).json({
      message: 'Rezervimi u krye me sukses!',
      reservationNumber: reservation.reservationNumber,
    });
  } catch (err) {
    console.error('❌ GABIM GJATË REZERVIMIT:', err);
    res.status(500).json({ message: 'Gabim i brendshëm i serverit', error: err.message });
  }
});

module.exports = router;
