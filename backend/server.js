const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;



// Middleware
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (Postman, server-to-server) or localhost
    if (!origin || origin.startsWith('http://localhost')) {
      callback(null, true);
    } else if (origin === process.env.FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request Logger (Debug)
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
});

// MongoDB lidhja
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/autocimi')
  .then(() => console.log('✅ MongoDB u lidh me sukses'))
  .catch((err) => console.error('❌ MongoDB gabim lidhje:', err.message));

// Test Route
app.get('/test', (req, res) => res.json({ message: 'Serveri punon!' }));

// Import Routes
const partRoutes = require('./routes/parts');
const orderRoutes = require('./routes/orders');
const comingCarsRoutes = require('./routes/comingCars');

// Register Routes
app.use('/api/parts', partRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/coming-cars', comingCarsRoutes);

// Health check
app.get('/api/health', (req, res) => {
  const mongoStatus = mongoose.connection.readyState;
  const mongoStatusText = ['Shkëputur', 'Lidhur', 'Duke u lidhur', 'Duke u shkëputur'];
  res.json({
    status: 'ok',
    message: 'Auto Cimi API është aktive',
    mongodb: mongoStatusText[mongoStatus] || 'E panjohur',
    timestamp: new Date().toISOString(),
  });
});

// 404
app.use((req, res) => {
  res.status(404).json({ message: 'Rruga nuk u gjet' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Gabim i brendshëm i serverit' });
});

app.listen(PORT, () => {
  console.log(`🚀 Auto Cimi Backend po ekzekutohet në http://localhost:${PORT}`);
  console.log('📌 Rrugët e regjistruara: /api/parts, /api/orders, /api/coming-cars');
});
