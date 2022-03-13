import { Product } from 'models/Product.model';
import mongoose from 'mongoose';

import { ProductRepo } from '../repositories/Product.repo';

const productRepo: ProductRepo = new ProductRepo();

export class ProductService {
  // TODO: findAll()

  // TODO: findOne()

  // TODO: createOne()
  async createOne(data: Product) {
    try {
      const productDoc = await productRepo.create(data);
      return productDoc;
    } catch (error) {
      console.error(error);
    }
  }
  // TODO: updateOne()

  // TODO: deleteOne()
}
