import mongoose from 'mongoose';
import { CategoryRepo } from '../repositories/Category.repo';

const categoryRepo = new CategoryRepo();

export class CategoryService {
  // TODO: findAll()

  // TODO: findOne()
  async findOne(_id: mongoose.Types.ObjectId | number) {
    try {
      const categoryDoc = await categoryRepo.findById();
      return categoryDoc
    } catch (error) {
      console.error(error)
    }
  }

  // TODO: createOne()

  // TODO: updateOne()

  // TODO: deleteOne()
}
