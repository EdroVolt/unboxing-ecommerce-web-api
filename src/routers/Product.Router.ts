import { ProductController } from '../controllers/Product.controller';
import { IRouterCustom } from '../core/interface/router.interface';
import express, { IRouter } from 'express';
import ProductValidator from '../middlewares/validations/productRouter.validate';

const productController = new ProductController();
const productValidator = new ProductValidator();

export class ProductRouter implements IRouterCustom {
  getRouter(): IRouter {
    const productRouter = express.Router();

    productRouter
      .route('/products')
      .get(productController.getAll)
      .post(productValidator.post, productController.post);

    productRouter
      .route('/products/:id')
      .get(productValidator.getOneOrDelete, productController.getOne)
      .put(productValidator.put, productController.put)
      .delete(productValidator.getOneOrDelete, productController.delete);

    productRouter.route('/products/:id/reviews').post(productController.postReview);

    return productRouter;
  }
}
