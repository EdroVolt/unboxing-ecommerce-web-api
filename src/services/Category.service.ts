import { CategoryRepo } from '../repositories/Category.repo';

const categoryRepo = new CategoryRepo();

export class CategoryService {
  // TODO: findAll()
  async findAll() {
    try {
      const categoryDocs = await categoryRepo.findAll();
      return categoryDocs
    } catch (error) {
      console.error(error)
    }
  }

  // TODO: findOne()

  // TODO: createOne()

  // TODO: updateOne()

  // TODO: deleteOne()
}
