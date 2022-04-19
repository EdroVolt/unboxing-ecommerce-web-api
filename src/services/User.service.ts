import { User } from '../models/User.model';
import { BaseService } from './Base.service';
import { UserRepo } from '../repositories/User.repo';
import mongoose from 'mongoose';
import UserOrder from '../interfaces/userOrder.interface';
import UserCart from '../interfaces/userCart.interface';
import UserWishList from '../interfaces/userWishList.interface';
import { ProductRepo } from '../repositories/Product.repo';

const productRepo = new ProductRepo();

export class UserService extends BaseService<User> {
  _repoObj: UserRepo = new UserRepo();

  async findOneByEmail(email: string) {
    try {
      const doc = await this._repoObj.findByEmail(email);
      return doc;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async createOrder(_id: mongoose.Types.ObjectId | number, order: UserOrder) {
    try {
      const user: any = await this._repoObj.findById(_id);
      const orderedProducts: any[] = [];

      for (const value of order.products) {
        const product: any = await productRepo.findById(value.product);
        if (product.count - value.count < 0) {
          throw new Error(
            `product: ${product.name} has only ${product.count} items`
          );
        }
        orderedProducts.push(value);
      }

      for (const value of orderedProducts) {
        const product: any = await productRepo.findById(value.product);
        product.count = product.sizeCount[value.size] - value.count;
        product.count = product.count - value.count;
        product.save();
      }

      order.createdAt = new Date();

      user.orders.push(order);
      user.save();

      return user.orders;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async updateCart(_id: mongoose.Types.ObjectId | number, cart: UserCart) {
    try {
      const user: any = await this._repoObj.findById(_id);

      user.cart = cart;
      user.save();

      return user.cart;
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

      return user.wishList;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }
}
