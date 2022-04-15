import { Product, ProductModel } from '../models/Product.model';
import { BaseRepo } from './Base.repo';
import mongoose, { model } from 'mongoose';

export class ProductRepo extends BaseRepo<Product> {
  _collectionName: string = 'products';
  _model: Object = ProductModel;

  findAll(filter: Object = {}, skip: number = 0, limit: number = 10) {
    return new Promise((resolve, reject) => {
      model(this._collectionName)
        .find(filter)
        .populate('category')
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
        .populate('category')
        .exec((err, doc) => {
          if (err) reject(err);
          resolve(doc);
        });
    });
  }
}
