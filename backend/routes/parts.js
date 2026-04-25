const express = require('express');
const router = express.Router();
const Part = require('../models/Part');

// GET /api/parts - me filter dhe pagination
router.get('/', async (req, res) => {
  try {
    const {
      brand,
      model,
      year,
      category,
      search,
      isNew,
      isFeatured,
      page = 1,
      limit = 12,
    } = req.query;

    const query = {};

    if (brand) query.brand = brand;
    if (model) query.model = { $regex: model, $options: 'i' };
    if (year) query.years = parseInt(year);
    if (category) query.category = category;
    if (isNew === 'true') query.isNewPart = true;
    if (isFeatured === 'true') query.isFeatured = true;

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { partNumber: { $regex: search, $options: 'i' } },
        { model: { $regex: search, $options: 'i' } },
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const total = await Part.countDocuments(query);
    const parts = await Part.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    res.json({
      parts,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / parseInt(limit)),
    });
  } catch (err) {
    res.status(500).json({ message: 'Gabim serveri', error: err.message });
  }
});

// GET /api/parts/filters - merr vlerat unike për filtrat
router.get('/filters', async (req, res) => {
  try {
    const brands = await Part.distinct('brand');
    const categories = await Part.distinct('category');

    // Grupimi brand -> modelet
    const brandModels = {};
    for (const brand of brands) {
      const models = await Part.distinct('model', { brand });
      brandModels[brand] = models.sort();
    }

    res.json({ brands: brands.sort(), brandModels, categories: categories.sort() });
  } catch (err) {
    res.status(500).json({ message: 'Gabim serveri', error: err.message });
  }
});

// GET /api/parts/new - pjeset e reja
router.get('/new', async (req, res) => {
  try {
    const parts = await Part.find({ isNewPart: true }).sort({ createdAt: -1 }).limit(8);
    res.json(parts);
  } catch (err) {
    res.status(500).json({ message: 'Gabim serveri', error: err.message });
  }
});

// GET /api/parts/:id
router.get('/:id', async (req, res) => {
  try {
    const part = await Part.findById(req.params.id);
    if (!part) return res.status(404).json({ message: 'Pjesa nuk u gjet' });
    res.json(part);
  } catch (err) {
    res.status(500).json({ message: 'Gabim serveri', error: err.message });
  }
});

// POST /api/parts - shto pjese te re (admin)
router.post('/', async (req, res) => {
  try {
    const part = new Part(req.body);
    await part.save();
    res.status(201).json(part);
  } catch (err) {
    res.status(400).json({ message: 'Te dhena te pavlefshme', error: err.message });
  }
});

// PUT /api/parts/:id - perditeso
router.put('/:id', async (req, res) => {
  try {
    const part = await Part.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!part) return res.status(404).json({ message: 'Pjesa nuk u gjet' });
    res.json(part);
  } catch (err) {
    res.status(400).json({ message: 'Gabim perditesimi', error: err.message });
  }
});

// DELETE /api/parts/:id
router.delete('/:id', async (req, res) => {
  try {
    const part = await Part.findByIdAndDelete(req.params.id);
    if (!part) return res.status(404).json({ message: 'Pjesa nuk u gjet' });
    res.json({ message: 'Pjesa u fshi me sukses' });
  } catch (err) {
    res.status(500).json({ message: 'Gabim serveri', error: err.message });
  }
});

module.exports = router;
