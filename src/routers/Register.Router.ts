import express, { IRouter } from 'express';
import { IRouterCustom } from '../core/interface/router.interface';
import { RegisterController } from '../controllers/Register.controller';
import { JwtChecking } from '../middlewares/Auth';

const registerController = new RegisterController();
const jwtchecking = new JwtChecking();

export class RegisterRouter implements IRouterCustom {
  getRouter(): IRouter {
    const registerRouter = express.Router();

    registerRouter.route('/register').post(registerController.post);

    return registerRouter;
  }
}
