import mongoose from 'mongoose';
import { CategoryRepo } from '../repositories/Category.repo';

const categoryRepo = new CategoryRepo();

export class CategoryService {
  // TODO: findAll()

  // TODO: findOne()

  // TODO: createOne()

  // TODO: updateOne()
  async updateOne(_id: mongoose.Types.ObjectId | number, data: object) {
    try {
      const categoryDoc = await categoryRepo.updateOne(_id, data);
      const newCategory = await categoryRepo.findOne(categoryDoc._id)
      return newCategory
    } catch (error) {
      console.log(error);
    }
  }

  // TODO: deleteOne()
}
