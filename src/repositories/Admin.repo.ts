import { model } from 'mongoose';
import { Admin, AdminModel } from '../models/Admin.model';
import { BaseRepo } from './Base.repo';

export class AdminRepo extends BaseRepo<Admin> {
  _model = AdminModel;
  _collectionName: string = 'admins';

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
