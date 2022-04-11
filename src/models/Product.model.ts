import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  count: { type: Number, default: 0 },
  sizeCount: {
    xs: { type: Number, default: 0 },
    s: { type: Number, default: 0 },
    md: { type: Number, default: 0 },
    l: { type: Number, default: 0 },
    xl: { type: Number, default: 0 }
  },
  categoryId: mongoose.Types.ObjectId,
  ingredients: [String],
  images: [{ type: String, required: true }],
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  offer: { type: Boolean, default: false },
  reviews: [
    {
      userId: mongoose.Types.ObjectId,
      comment: String,
      rate: Number
    }
  ],
  numOfReviews: Number
});

export const ProductModel = mongoose.model('products', schema);

export interface Product {
  _id?: mongoose.Types.ObjectId;
  name: string;
  description: string;
  count: number;
  sizeCount: {
    xs: number;
    s: number;
    md: number;
    l: number;
    xl: number;
  };
  categoryId: mongoose.Types.ObjectId;
  ingredients: string[];
  images: string[];
  price: number;
  discount: number;
  offer: boolean;
  reviews: [
    {
      userId: mongoose.Types.ObjectId;
      comment: string;
      rate: number;
    }
  ];
  numOfReviews: number;
}
