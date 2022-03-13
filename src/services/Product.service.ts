import { Product } from 'models/Product.model';
import mongoose from 'mongoose';

import { ProductRepo } from '../repositories/Product.repo';

const productRepo: ProductRepo = new ProductRepo();

export class ProductService {
  // TODO: findAll()
  // TODO: findOne()
  // TODO: createOne()
  // TODO: updateOne()
  async updateOne(_id: mongoose.Types.ObjectId | number, data: object) {
    try {
      const productDoc = await productRepo.updateOne(_id, data);
      const newProduct = await productRepo.findById(_id);
      return newProduct;
    } catch (error) {
      console.log(error);
    }
  }
  // TODO: deleteOne()
}
