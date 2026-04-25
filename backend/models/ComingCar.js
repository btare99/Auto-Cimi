const mongoose = require('mongoose');

const comingCarSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  expectedDate: { type: String, default: '' }, // e.g. "Maj 2025"
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ComingCar', comingCarSchema);
