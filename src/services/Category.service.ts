import mongoose from 'mongoose';
import { CategoryRepo } from '../repositories/Category.repo';

const categoryRepo = new CategoryRepo();

export class CategoryService {
  // TODO: findAll()

  // TODO: findOne()

  // TODO: createOne()

  // TODO: updateOne()

  // TODO: deleteOne()
  async deletOne(_id: mongoose.Types.ObjectId | number) {
    try {
      const categoryDoc = await categoryRepo.deleteOne(_id)
      return categoryDoc
    } catch (error) {
      console.log(error)
    }
  }
}
