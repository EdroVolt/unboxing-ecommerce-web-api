import mongoose from 'mongoose';

// creat user schema
const schema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,

  name: { String, required: true },
  email: { String, required: true },
  password: { String, required: true },

  role: String
});

// generate user type as User interface
export interface User {
  _id: mongoose.Types.ObjectId;

  name: { String; required: true };
  email: { String; required: true };
  password: { String; required: true };

  role: String;
}
