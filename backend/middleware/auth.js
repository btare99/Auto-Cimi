const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'Nuk keni autorizim (Mungon Token)' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'autocimi_secret_key');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token i pavlefshëm' });
  }
};

module.exports = auth;
