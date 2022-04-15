import express, { IRouter } from 'express';
import { IRouterCustom } from '../core/interface/router.interface';
import { UserController } from '../controllers/User.controller';
import UserValidator from '../middlewares/validations/userRouter.validate';

const userController = new UserController();
const userValidator = new UserValidator();

export class UserRouter implements IRouterCustom {
  getRouter(): IRouter {
    const userRouter = express.Router();

    userRouter
      .route('/users')
      .get(userController.getAll)
      .post(userValidator.post, userController.post);

    userRouter
      .route('/users/:id')
      .get(userValidator.getOneOrDelete, userController.getOne)
      .put(userValidator.put, userController.put)
      .delete(userValidator.getOneOrDelete, userController.delete);

    userRouter.route('/users/:id/orders').post(userController.postOrder);
    userRouter.route('/users/:id/cart').put(userController.putCart);
    userRouter.route('/users/:id/wishList').put(userController.putWishList);

    return userRouter;
  }
}
