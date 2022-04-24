import { CategoryController } from '../controllers/Category.controller';
import express, { IRouter } from 'express';
import { IRouterCustom } from '../core/interface/router.interface';
import CategoryValidator from '../middlewares/validations/categoryRouter.validate';
import { JwtChecking } from '../middlewares/Auth';

const categoryController = new CategoryController();
const categoryValidation = new CategoryValidator();
const auth = new JwtChecking();

export class CategoryRouter implements IRouterCustom {
  getRouter(): IRouter {
    const categoryRouter = express.Router();

    categoryRouter
      .route('/categories')
      .get(categoryController.getAll)
      .post(auth.checkJwt, categoryValidation.post, categoryController.post);

    categoryRouter
      .route('/categories/:id')
      .get(categoryValidation.getOneOrDelete, categoryController.getOne)
      .put(auth.checkJwt, categoryValidation.put, categoryController.put)
      .delete(
        auth.checkJwt,
        categoryValidation.getOneOrDelete,
        categoryController.delete
      );

    return categoryRouter;
  }
}
