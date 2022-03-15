import { ProductRepo } from '../repositories/Product.repo';

const productRepo = new ProductRepo();

export class ProductService {
  // TODO: findAll()
  async findAll(filter: Object = {}) {
    try {
      const productDoc = await productRepo.findAll(filter);
      return productDoc;
    } catch (err) {
      console.log(err);
    }
  }

  // TODO: findOne()

  // TODO: createOne()

  // TODO: updateOne()

  // TODO: deleteOne()
}
