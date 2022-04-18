import { User } from 'models/User.model';
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { BaseService } from '../services/Base.service';
import { UserService } from './../services/User.service';
import { UserController } from './User.controller';

export class RegisterController {
  _serviceObj = new UserService();
  userController = new UserController();

  post = async (req: Request, res: Response, next: NextFunction) => {
    this._serviceObj = new UserService();

    try {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      this.userController.post(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}
