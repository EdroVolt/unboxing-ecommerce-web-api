import mongoose from 'mongoose';

// creat user schema
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
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
          productId: { type: mongoose.Types.ObjectId, ref: 'products' },
          count: Number
        }
      ],
      totalCount: Number,
      paymentMethod: { enum: ['cash', 'visa'] },
      date: Date // NOTE: generate date on order creation
    }
  ],
  cart: [
    {
      products: [
        {
          productId: { type: mongoose.Types.ObjectId, ref: 'products' },
          count: Number
        }
      ],
      totalCount: Number
    }
  ],
  wishList: [
    {
      products: [
        {
          productId: { type: mongoose.Types.ObjectId, ref: 'products' },
          count: Number
        }
      ],
      totalCount: Number
    }
  ]
});

// add user schema to mongoose wih users collection
export const UserModel = mongoose.model('users', schema);

// generate user type as User interface
export interface User {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: {
    city: string;
    street: string;
    government: string;
  };
  oreders: [
    {
      products: [{ productId: mongoose.Types.ObjectId; count: number }];
      totalCount: number;
      paymentMethod: 'cash' | 'visa';
    }
  ];
  cart: [
    {
      products: [{ productId: mongoose.Types.ObjectId; count: number }];
      totalCount: Number;
    }
  ];
  wishList: [
    {
      products: [{ productId: mongoose.Types.ObjectId; count: number }];
      totalCount: number;
    }
  ];
}
