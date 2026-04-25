const express = require('express');
const router = express.Router();
const ComingCar = require('../models/ComingCar');

// GET /api/coming-cars
router.get('/', async (req, res) => {
  try {
    const cars = await ComingCar.find({ isActive: true }).sort({ createdAt: -1 });
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: 'Gabim serveri', error: err.message });
  }
});

// POST /api/coming-cars
router.post('/', async (req, res) => {
  try {
    const car = new ComingCar(req.body);
    await car.save();
    res.status(201).json(car);
  } catch (err) {
    res.status(400).json({ message: 'Te dhena te pavlefshme', error: err.message });
  }
});

// PUT /api/coming-cars/:id
router.put('/:id', async (req, res) => {
  try {
    const car = await ComingCar.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!car) return res.status(404).json({ message: 'Makina nuk u gjet' });
    res.json(car);
  } catch (err) {
    res.status(400).json({ message: 'Gabim perditesimi', error: err.message });
  }
});

// DELETE /api/coming-cars/:id
router.delete('/:id', async (req, res) => {
  try {
    await ComingCar.findByIdAndDelete(req.params.id);
    res.json({ message: 'U fshi me sukses' });
  } catch (err) {
    res.status(500).json({ message: 'Gabim serveri', error: err.message });
  }
});

module.exports = router;
