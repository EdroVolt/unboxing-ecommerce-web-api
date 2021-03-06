import mongoose from 'mongoose';

// creat category schema
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
);

// add category schema to mongoose wih category collection
export const CategoryModel = mongoose.model('categories', schema);

// generate category type as Category interface
export interface Category {
  _id?: mongoose.Types.ObjectId;
  name: string;
  image: string;
}
