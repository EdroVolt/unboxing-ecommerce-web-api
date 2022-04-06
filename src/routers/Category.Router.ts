import { CategoryController } from '../controllers/Category.controller';
import express, { IRouter } from 'express';
import { IRouterCustom } from '../core/interface/router.interface';

const categoryController = new CategoryController();

export class CategoryRouter implements IRouterCustom {
  getRouter(): IRouter {
    const categoryRouter = express.Router();

    categoryRouter
      .route('/categories')
      .get(categoryController.getAll)
      .post(categoryController.post);

    categoryRouter
      .route('/categories/:id')
      .get(categoryController.getOne)
      .put(categoryController.put)
      .delete(categoryController.delete);

    return categoryRouter;
  }
}
