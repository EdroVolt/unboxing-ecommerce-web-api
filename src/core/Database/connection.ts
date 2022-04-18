import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/ecommerceTestDB', () => {
  console.log('DB connected');
});
