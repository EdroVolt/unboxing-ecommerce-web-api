import mongoose from 'mongoose';
import { BaseRepo } from '../repositories/Base.repo';

export type BaseFilter = {
  page: number;
  name?: RegExp;
};

export abstract class BaseService<schema> {
  abstract readonly _repoObj: BaseRepo<schema>;

  // TODO: findAll()
  async findAll(filter: BaseFilter, fields: string | null = null) {
    const limit = 20;
    const skip = (filter.page - 1) * limit;

    if (filter.name) filter.name = new RegExp(`${filter.name}`, 'i');
    try {
      const docs = await this._repoObj.findAll({ ...filter }, skip, limit, fields);
      const count = await this._repoObj.countDocuments({ ...filter });

      const numOfPages = Math.ceil(count / limit);
      return { data: docs, numOfPages };
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  // TODO: findOne()
  async findOne(
    _id: mongoose.Types.ObjectId | number,
    fields: string | null = null
  ) {
    try {
      const doc = await this._repoObj.findById(_id, fields);
      return doc;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  // TODO: createOne()
  async createOne(data: schema) {
    try {
      const doc = await this._repoObj.create(data);
      return doc;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  // TODO: updateOne()
  async updateOne(_id: mongoose.Types.ObjectId | number, data: {}) {
    try {
      await this._repoObj.updateOne(_id, data);

      const newDoc = await this._repoObj.findById(_id);
      return newDoc;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  // TODO: deleteOne()
  async deleteOne(_id: mongoose.Types.ObjectId | number) {
    try {
      const doc = await this._repoObj.deleteOne(_id);
      return doc;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }
}
