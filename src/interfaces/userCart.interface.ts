import mongoose from 'mongoose';

export default interface UserCart {
  products: {
    product: mongoose.Types.ObjectId;
    count: number;
  }[];
  totalCount: number;
}
