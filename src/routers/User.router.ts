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

    userRouter.route('/users').get(auth.checkJwt, userController.getAll);
    userRouter.route('/users/me').get(auth.checkJwt, userController.getMe);

    userRouter
      .route('/users/:id')
      .get(auth.checkJwt, userValidator.getOneOrDelete, userController.getOne)
      .put(auth.checkJwt, userController.put)
      .delete(auth.checkJwt, userValidator.getOneOrDelete, userController.delete);
    userRouter
      .route('/users/:id/changePassword')
      .put(auth.checkJwt, userController.changePassword);
    userRouter
      .route('/users/:id/orders')
      .post(auth.checkJwt, userController.postOrder);
    userRouter
      .route('/users/me/cart')
      .get(userController.getMyCart)
      .post(userController.postMyCart)
      .put(auth.checkJwt, userController.putCart)
      .delete(userController.deleteMyCart);

    userRouter
      .route('/users/me/wishList')
      .get(userController.getMyWishList)
      .post(userController.postMyWishList)
      .put(auth.checkJwt, userController.putWishList)
      .delete(userController.deleteMyWishList);

    return userRouter;
  }
}
