const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  brand: {
    type: String,
    required: true,
    enum: ['Peugeot', 'Renault', 'Citroën', 'DS', 'Alpine', 'Hyundai'],
  },
  model: { type: String, required: true }, // e.g. "3008", "Clio", "Tucson"
  years: [{ type: Number }],               // e.g. [2018, 2019, 2020]
  category: { type: String, required: true }, // "Motor", "Frenë", "Suspension", etc.
  partNumber: { type: String, default: '' },
  price: { type: Number, required: true, min: 0 },
  stock: { type: Number, default: 0 },
  images: [{ type: String }],              // URLs or file paths
  isNewPart: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

partSchema.index({ brand: 1, model: 1 });
partSchema.index({ name: 'text', description: 'text', partNumber: 'text' });

module.exports = mongoose.model('Part', partSchema);
