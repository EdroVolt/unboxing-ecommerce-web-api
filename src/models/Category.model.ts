import mongoose from 'mongoose';

// creat category schema
const schema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { String, required: true },
  image: { String, required: true }
});

// add category schema to mongoose wih category collection
export const CategoryModel = mongoose.model('categories', schema);

// generate category type as Category interface
export interface Category {
  _id: mongoose.Types.ObjectId,
  name: string,
  image: string
}
