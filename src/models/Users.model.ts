import mongoose from 'mongoose';

// creat user schema
const schema = new mongoose.Schema({
  name: { String, required: true },
  email: { String, required: true },
  password: { String, required: true },
  phoneNumber: String,
  address: {
    city: String,
    street: String,
    government: String
  },
  oreders: [{
    products: [{ productId: mongoose.Types.ObjectId, count: Number, ref: 'products' }],
    totalCount: Number,
    paymentMethod: { enum: ['cash', 'visa'] }
  }],
  cart: [{
    products: [{ productId: mongoose.Types.ObjectId, count: Number, ref: 'products' }],
    totalCount: Number
  }],
  wishList: [{
    products: [{ productId: mongoose.Types.ObjectId, count: Number, ref: 'products' }],
    totalCount: Number
  }]
});

// add user schema to mongoose wih users collection
export const UserModel = mongoose.model('users', schema);

// generate user type as User interface
export interface User {
    name: string,
    email: string,
    password: string,
    phoneNumber: string,
    address: {
      city: string,
      street: string,
      government: string
    },
    oreders: [{
      products: [{ productId: mongoose.Types.ObjectId, count: Number}],
      totalCount: Number,
      paymentMethod: { enum: ['cash', 'visa'] }
    }],
    cart: [{
      products: [{ productId: mongoose.Types.ObjectId, count: Number }],
      totalCount: Number
    }],
    wishList: [{
      products: [{ productId: mongoose.Types.ObjectId, count: Number }],
      totalCount: Number
    }]
}
