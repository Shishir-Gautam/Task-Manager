require('dotenv').config();
const mongoose = require('mongoose');

// Ensure that the 'url' is passed when calling connectDB
const connectDB = async (url) => {
  console.log("i suck at coding" );
  if (!url) {
    throw new Error('MongoDB connection URL is missing');
  }

  // Mongoose connection without additional options (default is fine in Mongoose 6+)
   console.log(await mongoose.connect(url));
  return mongoose.connect(url);
};

module.exports = connectDB;
