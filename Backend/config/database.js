const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Loads environment variables from .env file

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // No longer need useNewUrlParser, useUnifiedTopology, or useCreateIndex
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
