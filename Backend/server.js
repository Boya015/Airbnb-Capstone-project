const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const serverConfig = require('./serverConfig');

dotenv.config();

// Connect to the database
connectDB();

// Import the Express app
const app = require('./mainApp');

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
