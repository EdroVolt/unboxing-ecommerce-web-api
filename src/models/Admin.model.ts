import mongoose from 'mongoose';

// creat Admin schema
const schema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: { String, required: true },
  email: { String, required: true },
  password: { String, required: true },
  role: String
});

mongoose.model('admins', schema);
// generate admin type as Admin interface
export interface Admin {
  _id: mongoose.Types.ObjectId;
  name: String;
  email: String;
  password: String;
  role: String;
}
