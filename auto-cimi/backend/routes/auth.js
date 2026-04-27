const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Kredencialet janë të gabuara' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || 'autocimi_secret_key',
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: { id: user._id, username: user.username, role: user.role }
    });
  } catch (err) {
    res.status(500).json({ message: 'Gabim serveri', error: err.message });
  }
});

module.exports = router;
