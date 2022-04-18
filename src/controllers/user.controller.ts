import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { BaseController } from './Base.controller';
import { UserService } from '../services/User.service';

import { User } from '../models/User.model';
import UserOrder from 'interfaces/userOrder.interface';
import UserCart from 'interfaces/userCart.interface';
import UserWishList from 'interfaces/userWishList.interface';

export class UserController extends BaseController<User> {
  _serviceObj: UserService = new UserService();

  postOrder = async (req: Request, res: Response, next: NextFunction) => {
    const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
    const order: UserOrder = req.body;

    try {
      const data = await this._serviceObj.createOrder(_id, order);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  putCart = async (req: Request, res: Response, next: NextFunction) => {
    const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
    const cart: UserCart = req.body;

    try {
      const data = await this._serviceObj.updateCart(_id, cart);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };

  putWishList = async (req: Request, res: Response, next: NextFunction) => {
    const _id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId(req.params.id);
    const wishList: UserWishList = req.body;

    try {
      const data = await this._serviceObj.updateWishList(_id, wishList);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  };
}
