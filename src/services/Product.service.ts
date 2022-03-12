import mongoose from 'mongoose';
import { ProductRepo } from '../repositories/Product.repo';

const productRepo = new ProductRepo();

export class ProductService {
  // TODO: findAll()

  // TODO: findOne()

  // TODO: createOne()

  // TODO: updateOne()

  // TODO: deleteOne()
  async deleteOne(_id: mongoose.Types.ObjectId | number){
    try {
      const productDoc = await productRepo.deleteOne(_id);
      return productDoc
    } catch (error) {
      console.error(error);
    }
  }
}
