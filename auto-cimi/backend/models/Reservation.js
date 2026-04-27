const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    notes: { type: String, default: '' },
  },
  car: {
    carId: { type: String },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    expectedDate: { type: String },
  },
  status: {
    type: String,
    enum: ['Pezull', 'Konfirmuar', 'Anuluar'],
    default: 'Pezull',
  },
  reservationNumber: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

// Auto-generate reservation number before saving
reservationSchema.pre('save', async function() {
  if (this.isNew && !this.reservationNumber) {
    try {
      const count = await mongoose.model('Reservation').countDocuments();
      this.reservationNumber = `RES-${Date.now().toString().slice(-5)}-${count + 1}`;
    } catch (err) {
      this.reservationNumber = `RES-${Math.floor(Math.random() * 100000)}`;
    }
  }
});

module.exports = mongoose.model('Reservation', reservationSchema);
