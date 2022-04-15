import { User } from '../models/User.model';
import { BaseService } from './Base.service';
import { UserRepo } from '../repositories/User.repo';
import mongoose from 'mongoose';
import UserOrder from 'interfaces/userOrder.interface';
import UserCart from 'interfaces/userCart.interface';
import UserWishList from 'interfaces/userWishList.interface';

export class UserService extends BaseService<User> {
  _repoObj: UserRepo = new UserRepo();

  async createOrder(_id: mongoose.Types.ObjectId | number, order: UserOrder) {
    try {
      const user: any = await this._repoObj.findById(_id);
      order.createdAt = new Date();

      user.orders.push(order);
      user.save();

      return user;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async updateCart(_id: mongoose.Types.ObjectId | number, cart: UserCart) {
    try {
      const user: any = await this._repoObj.findById(_id);

      user.cart = cart;
      user.save();

      return user;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async updateWishList(
    _id: mongoose.Types.ObjectId | number,
    wishList: UserWishList
  ) {
    try {
      const user: any = await this._repoObj.findById(_id);

      user.wishList = wishList;
      user.save();

      return user;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }
}
