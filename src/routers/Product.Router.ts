import { ProductController } from '../controllers/Product.controller';
import { IRouterCustom } from '../core/interface/router.interface';
import express, { IRouter } from 'express';
import ProductValidator from '../middlewares/validations/productRouter.validate';
import { JwtChecking } from '../middlewares/Auth';

const productController = new ProductController();
const productValidator = new ProductValidator();
const auth = new JwtChecking();

export class ProductRouter implements IRouterCustom {
  getRouter(): IRouter {
    const productRouter = express.Router();

    productRouter.route('/products').get(productController.getAll).post(
      // auth.checkJwt,
      // productValidator.post,
      productController.post
    );

    productRouter
      .route('/products/:id')
      .get(productValidator.getOneOrDelete, productController.getOne)
      .put(auth.checkJwt, productValidator.put, productController.put)
      .delete(
        auth.checkJwt,
        productValidator.getOneOrDelete,
        productController.delete
      );

    productRouter
      .route('/products/:id/reviews')
      .post(auth.checkJwt, productController.postReview);

    return productRouter;
  }
}
