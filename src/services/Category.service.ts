import { CategoryRepo } from '../repositories/Category.repo';

const categoryRepo = new CategoryRepo();

export class CategoryService {
  // TODO: findAll()
  async findAll() {
    try {
      const categoryDoc = await categoryRepo.findAll();
      return categoryDoc
    } catch (error) {
      console.error(error)
    }
  }

  // TODO: findOne()

  // TODO: createOne()

  // TODO: updateOne()

  // TODO: deleteOne()
}
