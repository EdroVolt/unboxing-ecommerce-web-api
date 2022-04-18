import { CategoryController } from '../controllers/Category.controller';
import express, { IRouter } from 'express';
import { IRouterCustom } from '../core/interface/router.interface';
import CategoryValidator from '../middlewares/validations/categoryRouter.validate';

const categoryController = new CategoryController();
const categoryValidation = new CategoryValidator();

export class CategoryRouter implements IRouterCustom {
  getRouter(): IRouter {
    const categoryRouter = express.Router();

    categoryRouter
      .route('/categories')
      .get(categoryController.getAll)
      .post(categoryValidation.post, categoryController.post);

    categoryRouter
      .route('/categories/:id')
      .get(categoryValidation.getOneOrDelete, categoryController.getOne)
      .put(categoryValidation.put, categoryController.put)
      .delete(categoryValidation.getOneOrDelete, categoryController.delete);

    return categoryRouter;
  }
}
