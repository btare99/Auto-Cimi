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
      partId: { type: String },
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
orderSchema.pre('save', async function() {
  if (this.isNew && !this.orderNumber) {
    try {
      const count = await mongoose.model('Order').countDocuments();
      this.orderNumber = `AC-${Date.now().toString().slice(-5)}-${count + 1}`;
    } catch (err) {
      this.orderNumber = `AC-${Math.floor(Math.random() * 100000)}`;
    }
  }
});

module.exports = mongoose.model('Order', orderSchema);
