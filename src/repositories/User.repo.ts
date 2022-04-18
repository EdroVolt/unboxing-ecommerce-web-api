import { User, UserModel } from '../models/User.model';
import { BaseRepo } from './Base.repo';
import { model } from 'mongoose';

export class UserRepo extends BaseRepo<User> {
  _collectionName: string = 'users';
  _model: Object = UserModel;
    _populate: string =
    'orders.products.product cart.products.product wishList.products.product';

  findByEmail = async (email: string) => {
    return new Promise((resolve, reject) => {
      model(this._collectionName)
        .findOne({ email })
        .exec((err, doc) => {
          if (err) reject(err);
          resolve(doc);
        });
    });
  };
}
