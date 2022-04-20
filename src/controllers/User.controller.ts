import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { BaseController } from './Base.controller';
import { UserService } from '../services/User.service';
import * as jwt from 'jsonwebtoken';

import { User } from '../models/User.model';
import UserOrder from 'interfaces/userOrder.interface';
import UserCart from 'interfaces/userCart.interface';
import UserWishList from 'interfaces/userWishList.interface';

export class UserController extends BaseController<User> {
  _serviceObj: UserService = new UserService();

  getMe = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1] || '';
    const tokenData: any = jwt.decode(token);

    try {
      const user = await this._serviceObj.findOne(tokenData?.id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };

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

  postMyCart = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1] || '';
    const tokenData: any = jwt.decode(token);

    const product: any = req.body;

    try {
      const cart = await this._serviceObj.addToCart(tokenData?.id, product);
      res.status(200).json(cart);
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

  getMyCart = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1] || '';
    const tokenData: any = jwt.decode(token);

    try {
      const cart = await this._serviceObj.getCart(tokenData?.id);
      res.status(200).json(cart);
    } catch (err) {
      next(err);
    }
  };

  deleteMyCart = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1] || '';
    const tokenData: any = jwt.decode(token);

    const product: any = req.body.product;
    console.log(product);

    try {
      const cart = await this._serviceObj.deleteFromCart(tokenData?.id, product);
      res.status(200).json(cart);
    } catch (err) {
      next(err);
    }
  };

  postMyWishList = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1] || '';
    const tokenData: any = jwt.decode(token);

    const product: any = req.body;

    try {
      const wishList = await this._serviceObj.addToWishList(tokenData?.id, product);
      res.status(200).json(wishList);
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

  getMyWishList = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1] || '';
    const tokenData: any = jwt.decode(token);

    try {
      const wishList = await this._serviceObj.getWishList(tokenData?.id);
      res.status(200).json(wishList);
    } catch (err) {
      next(err);
    }
  };

  deleteMyWishList = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1] || '';
    const tokenData: any = jwt.decode(token);

    const product: any = req.body.product;

    try {
      const wishList = await this._serviceObj.deleteFromWishList(
        tokenData?.id,
        product
      );
      res.status(200).json(wishList);
    } catch (err) {
      next(err);
    }
  };
}
