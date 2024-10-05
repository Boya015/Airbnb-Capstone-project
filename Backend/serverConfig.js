const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const listingRoutes = require('./routes/listingRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const fileRoutes = require('./routes/fileRoutes');  // Add the file routes

const serverConfig = express();  // Rename 'app' to 'serverConfig'

// Middleware
serverConfig.use(cors());
serverConfig.use(express.json());
serverConfig.use('/uploads', express.static(path.join(__dirname, 'uploads')));  // Serve static files from the 'uploads' directory

// API Routes
serverConfig.use('/api/auth', authRoutes);
serverConfig.use('/api/listings', listingRoutes);
serverConfig.use('/api/reservations', reservationRoutes);
serverConfig.use('/api/files', fileRoutes);  // Add the file routes

module.exports = serverConfig;  // Export serverConfig instead of 'app'
