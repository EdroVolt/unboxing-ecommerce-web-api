import mongoose, { model } from 'mongoose';

export abstract class BaseRepo<schema> {
  abstract readonly _collectionName: string;
  abstract readonly _model: Object;

  findAll(filter: Object = {}) {
    return new Promise((resolve, reject) => {
      model(this._collectionName)
        .find(filter)
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
        .exec((err, doc) => {
          if (err) reject(err);
          resolve(doc);
        });
    });
  }

  create(data: schema) {
    return new Promise((resolve, reject) => {
      model(this._collectionName)
        .create(data)
        .then(
          (doc) => {
            resolve(doc);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  updateOne(_id: mongoose.Types.ObjectId | number, filter: {}) {
    return new Promise((resolve, reject) => {
      const doc = this.findById(_id);
      if (!doc) reject(new Error('no such document'));
      model(this._collectionName).updateOne(filter);
      resolve(doc);
    });
  }

  deleteOne(_id: mongoose.Types.ObjectId | number) {
    return new Promise((resolve, reject) => {
      const doc = this.findById(_id);
      if (!doc) reject(new Error('no such document'));
      model(this._collectionName).deleteOne({ _id });
      resolve(doc);
    });
  }
}
