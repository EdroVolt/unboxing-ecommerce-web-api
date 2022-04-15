import { User, UserModel } from '../models/User.model';
import { BaseRepo } from './Base.repo';
import mongoose, { model } from 'mongoose';

export class UserRepo extends BaseRepo<User> {
  _collectionName: string = 'users';
  _model: Object = UserModel;

  findAll(filter: Object = {}, skip: number = 0, limit: number = 10) {
    return new Promise((resolve, reject) => {
      model(this._collectionName)
        .find(filter)
        .populate('orders.products.product')
        .skip(skip)
        .limit(limit)
        .exec((err, docs) => {
          if (err) reject(err);
          resolve(docs);
        });
    });
  }

  findById(_id: mongoose.Types.ObjectId | number) {
    return new Promise((resolve, reject) => {
      model(this._collectionName)
        .findById(_id)
        .populate('orders.products.product')
        .exec((err, doc) => {
          if (err) reject(err);
          resolve(doc);
        });
    });
  }
}
