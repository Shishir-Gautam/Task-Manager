require('dotenv').config();
const mongoose = require('mongoose');

// Ensure that the 'url' is passed when calling connectDB
const connectDB =async (url) => {
  if (!url) {
    throw new Error('MongoDB connection URL is missing');
  }

  // Mongoose connection without additional options (default is fine in Mongoose 6+)
   
  return  await mongoose.connect(url);
};

module.exports = connectDB;
