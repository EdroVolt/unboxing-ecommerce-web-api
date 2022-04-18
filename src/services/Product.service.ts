import mongoose from 'mongoose';
import { Product } from '../models/Product.model';
import { ProductRepo } from '../repositories/Product.repo';
import { BaseService } from './Base.service';
import ProductReview from '../interfaces/productReview.interface';

export class ProductService extends BaseService<Product> {
  _repoObj: ProductRepo = new ProductRepo();

  async createReview(_id: mongoose.Types.ObjectId | number, review: ProductReview) {
    try {
      // TODO: fix any type
      const product: any = await this._repoObj.findById(_id);
      product.reviews.push(review);
      product.save();

      return product;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }
}
