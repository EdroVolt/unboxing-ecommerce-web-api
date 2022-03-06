import mongoose from 'mongoose';

// creat Admin schema
const schema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,

  name: { String, required: true },
  email: { String, required: true },
  password: { String, required: true },

  role: String
});

// generate admin type as Admin interface
export interface User {
  _id: mongoose.Types.ObjectId;

  name: string;
  email: string;
  password: string;
  role: String;
}
