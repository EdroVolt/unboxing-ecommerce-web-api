import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Product } from '../models/Product.model';
import { ProductService } from '../services/Product.service';
import { BaseController } from './Base.controller';

export class ProductController extends BaseController<Product> {
  _serviceObj: ProductService = new ProductService();

  postReview = async (req: Request, res: Response, next: NextFunction) => {
    const review = req.body;
    const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);

    try {
      const data = await this._serviceObj.createReview(_id, review);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };
}
