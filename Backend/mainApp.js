const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');
const listingRoutes = require('./routes/listingRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/listings', listingRoutes);
app.use('/api/reservations', reservationRoutes);

module.exports = app;
