import mongoose from 'mongoose';
import { ProductRepo } from '../repositories/Product.repo';

const productRepo = new ProductRepo();

export class ProductService {
  // TODO: findAll()

  // TODO: findOne()

  // TODO: createOne()

  // TODO: updateOne()
  async updateOne(_id: mongoose.Types.ObjectId | number, data: object) {
    try {
      const productDoc = await productRepo.updateOne(_id, data);
      return productDoc;
    } catch (error) {
      console.log(error);
    }
  }

  // TODO: deleteOne()
}
