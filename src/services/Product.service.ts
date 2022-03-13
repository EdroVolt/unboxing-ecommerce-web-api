import { Product } from 'models/Product.model';
import mongoose from 'mongoose';

import { ProductRepo } from '../repositories/Product.repo';

const productRepo: ProductRepo = new ProductRepo();

export class ProductService {
  // TODO: findAll()
  async findAll() {
    try {
      const productDoc = await productRepo.findAll();
      return productDoc;
    } catch (error) {
      console.error(error);
    }
  }
  // TODO: findOne()

  // TODO: createOne()

  // TODO: updateOne()

  // TODO: deleteOne()
}
