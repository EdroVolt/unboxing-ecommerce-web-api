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
        totalCount: Number,
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
      totalCount: Number
    },
    wishList: {
      products: [
        {
          product: { type: mongoose.Types.ObjectId, ref: 'products' },
          count: Number,
          size: String
        }
      ],
      totalCount: Number
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
      totalCount: number;
      paymentMethod: 'cash' | 'visa';
      createdAt?: Date;
    }
  ];
  cart: {
    products: { product: mongoose.Types.ObjectId; count: number }[];
    totalCount: number;
  };
  wishList: {
    products: { product: mongoose.Types.ObjectId; count: number }[];
    totalCount: number;
  };
}
