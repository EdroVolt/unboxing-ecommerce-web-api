import { ProductController } from '../controllers/Product.controller';
import { IRouterCustom } from '../core/interface/router.interface';
import express, { IRouter } from 'express';

const productController = new ProductController();

export class ProductRouter implements IRouterCustom {
  getRouter(): IRouter {
    const productRouter = express.Router();

    productRouter
      .route('/products')
      .get(productController.getAll)
      .post(productController.post);

    productRouter
      .route('/products/:id')
      .get(productController.getOne)
      .put(productController.put)
      .delete(productController.delete);

    return productRouter;
  }
}
