import express, { IRouter } from 'express';
import { IRouterCustom } from '../core/interface/router.interface';
import { SigninController } from './../controllers/Signin.controller';

const signinController = new SigninController();

export class SigninRouter implements IRouterCustom {
  getRouter(): IRouter {
    const loginRouter = express.Router();

    loginRouter.route('/login').post(signinController.getAuth);

    return loginRouter;
  }
}
