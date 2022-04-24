import mongoose from 'mongoose';

export default interface UserOrder {
  products: { product: mongoose.Types.ObjectId; count: number; size: string }[];
  totalPrice: number;
  paymentMethod: 'cash' | 'visa';
  createdAt?: Date;
}
