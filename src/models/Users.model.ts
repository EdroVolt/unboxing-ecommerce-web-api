import mongoose from 'mongoose';

// creat user schema
const schema = new mongoose.Schema({
  name: { String, required: true },
  email: { String, required: true },
  password: { String, required: true },
  phoneNumber: { Number, required: true },
  address: {
    city: String,
    street: String,
    government: String
  },
  oreders: [{
    products: [{ productId: Number, count: Number }],
    totalCount: Number,
    paymentMethod: String
  }],
  cart: [{
    products: [{ productId: Number, count: Number }],
    totalCount: Number
  }],
  wishList: [{
    products: [{ productId: Number, count: Number }],
    totalCount: Number
  }]
});

// add user schema to mongoose wih users collection
export const UserModel = mongoose.model('users', schema);

// generate user type as User interface
export interface User {
    name: String,
    email: String,
    password: String,
    phoneNumber: Number,
    address: {
      city: String,
      street: String,
      government: String
    },
    oreders: [{
      products: [{ productId: Number, count: Number }],
      totalCount: Number,
      paymentMethod: String
    }],
    cart: [{
      products: [{ productId: Number, count: Number }],
      totalCount: Number
    }],
    wishList: [{
      products: [{ productId: Number, count: Number }],
      totalCount: Number
    }]
}
