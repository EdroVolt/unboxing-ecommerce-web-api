import mongoose from 'mongoose';

// creat user schema
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: String,
    address: {
      city: String,
      street: String,
      government: String
    },
    orders: [
      {
        products: [
          {
            product: { type: mongoose.Types.ObjectId, ref: 'products' },
            count: Number,
            size: String
          }
        ],
        totalPrice: { type: Number, default: 0 },
        paymentMethod: { enum: ['cash', 'visa'] },
        createdAt: Date
      }
    ],
    cart: {
      products: [
        {
          product: { type: mongoose.Types.ObjectId, ref: 'products' },
          count: Number,
          size: String
        }
      ],
      totalPrice: { type: Number, default: 0 }
    },
    wishList: {
      products: [
        {
          product: { type: mongoose.Types.ObjectId, ref: 'products' },
          count: Number,
          size: String
        }
      ],
      totalPrice: { type: Number, default: 0 }
    }
  },
  { timestamps: true }
);

// add user schema to mongoose wih users collection
export const UserModel = mongoose.model('users', schema);

// generate user type as User interface
export interface User {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: {
    city: string;
    street: string;
    government: string;
  };
  orders: [
    {
      products: { product: mongoose.Types.ObjectId; count: number }[];
      totalPrice: number;
      paymentMethod: 'cash' | 'visa';
      createdAt?: Date;
    }
  ];
  cart: {
    products: { product: mongoose.Types.ObjectId; count: number }[];
    totalPrice: number;
  };
  wishList: {
    products: { product: mongoose.Types.ObjectId; count: number }[];
    totalPrice: number;
  };
}
