const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    notes: { type: String, default: '' },
  },
  items: [
    {
      partId: { type: mongoose.Schema.Types.ObjectId, ref: 'Part' },
      name: { type: String, required: true },
      brand: { type: String },
      model: { type: String },
      partNumber: { type: String },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ['Pezull', 'Konfirmuar', 'Dërguar', 'Dorëzuar', 'Anuluar'],
    default: 'Pezull',
  },
  orderNumber: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

// Auto-generate order number before saving
orderSchema.pre('save', async function (next) {
  if (!this.orderNumber) {
    const count = await mongoose.model('Order').countDocuments();
    this.orderNumber = `AC-${String(count + 1).padStart(5, '0')}`;
  }
  next();
});

module.exports = mongoose.model('Order', orderSchema);
