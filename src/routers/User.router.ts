import express, { IRouter } from 'express';
import { IRouterCustom } from '../core/interface/router.interface';
import { UserController } from '../controllers/User.controller';

const userController = new UserController();

export class UserRouter implements IRouterCustom {
  getRouter(): IRouter {
    const userRouter = express.Router();

    userRouter.route('/users').get(userController.getAll).post(userController.post);

    userRouter
      .route('/users/:id')
      .get(userController.getOne)
      .put(userController.put)
      .delete(userController.delete);

    return userRouter;
  }
}
