import { Product } from 'models/Product.model';
import mongoose from 'mongoose';

import { ProductRepo } from '../repositories/Product.repo';

const productRepo: ProductRepo = new ProductRepo();

export class ProductService {
  // TODO: findAll()

  // TODO: findOne()
  async findOne(_id: mongoose.Types.ObjectId | number) {
    try {
      const productDoc = await productRepo.findById(_id);
      return productDoc;
    } catch (err) {
      console.log(err);
    }
  }
  // TODO: createOne()

  // TODO: updateOne()

  // TODO: deleteOne()
}
