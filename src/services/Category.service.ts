import mongoose from 'mongoose';
import { Category } from '../models/Category.model';
import { CategoryRepo } from '../repositories/Category.repo';

const categoryRepo = new CategoryRepo();

export class CategoryService {
  // TODO: findAll()

  // TODO: findOne()

  // TODO: createOne()

  // TODO: updateOne()
  async updateOne(_id: mongoose.Types.ObjectId | number, data: Category) {
    try {
      const categoryDoc = await categoryRepo.updateOne(_id, data);
      return categoryDoc
    } catch (error) {
      console.log(error);
    }
  }

  // TODO: deleteOne()
}
