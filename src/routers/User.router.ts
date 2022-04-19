import express, { IRouter } from 'express';
import { IRouterCustom } from '../core/interface/router.interface';
import { UserController } from '../controllers/User.controller';
import UserValidator from '../middlewares/validations/userRouter.validate';
import { JwtChecking } from '../middlewares/Auth';

const userController = new UserController();
const userValidator = new UserValidator();
const auth = new JwtChecking();

export class UserRouter implements IRouterCustom {
  getRouter(): IRouter {
    const userRouter = express.Router();
    userRouter.route('/users/me').get(auth.checkJwt, userController.getMe);

    userRouter.route('/users').get(auth.checkJwt, userController.getAll);

    userRouter
      .route('/users/:id')
      .get(auth.checkJwt, userValidator.getOneOrDelete, userController.getOne)
      .put(auth.checkJwt, userValidator.put, userController.put)
      .delete(auth.checkJwt, userValidator.getOneOrDelete, userController.delete);

    userRouter
      .route('/users/:id/orders')
      .post(auth.checkJwt, userController.postOrder);
    userRouter.route('/users/:id/cart').put(auth.checkJwt, userController.putCart);
    userRouter
      .route('/users/:id/wishList')
      .put(auth.checkJwt, userController.putWishList);

    return userRouter;
  }
}
