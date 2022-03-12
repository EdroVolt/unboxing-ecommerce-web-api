import { CategoryRepo } from '../repositories/Category.repo';
import { Category } from '../models/Category.model'

const categoryRepo = new CategoryRepo();

export class CategoryService {
  // TODO: findAll()

  // TODO: findOne()

  // TODO: createOne()
  async createOne(data:Category) {
    try {
      const categoryDoc = await categoryRepo.create(data);
      return categoryDoc
    } catch (error) {
      console.error(error);
    }
  }

  // TODO: updateOne()

  // TODO: deleteOne()
}
