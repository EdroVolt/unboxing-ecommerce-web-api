import mongoose from 'mongoose';

export default interface ProductReview {
  userId: mongoose.Types.ObjectId;
  comment: String;
  rate: Number;
}
