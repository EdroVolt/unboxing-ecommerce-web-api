import mongoose from 'mongoose';
/* eslint-disable import/first */
require('dotenv').config();

mongoose.connect(
  process.env.DATABASE_URL || 'mongodb://localhost:27017/ecommerceTestDB',
  () => {
    console.log('DB connected');
  }
);
