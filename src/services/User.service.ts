import { User } from '../models/User.model';
import { BaseService } from './Base.service';
import { UserRepo } from '../repositories/User.repo';
import mongoose from 'mongoose';
import UserOrder from '../interfaces/userOrder.interface';
import UserCart from '../interfaces/userCart.interface';
import UserWishList from '../interfaces/userWishList.interface';
import { ProductRepo } from '../repositories/Product.repo';
import bcrypt from 'bcrypt';
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
        if (product.sizeCount[value.size] - value.count < 0) {
          throw new Error(
            `product: ${product.name} has only ${product.count} items for this size (${value.size})`
          );
        }
        product.sizeCount[value.size] -= value.count;
        await product.save();
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
      user.cart = { products: [], totalPrice: 0 };
      await user.save();

      return user.orders;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async addToCart(
    _id: mongoose.Types.ObjectId | number,
    product: { product: mongoose.Types.ObjectId; count: number }
  ) {
    try {
      const user: any = await this._repoObj.findById(_id);
      // check if product is exist in cart
      user.cart.products.forEach((item: any) => {
        if (item.product._id.toString() === product.product) {
          throw Error('product already added');
        }
      });

      user.cart.products.push(product);
      await user.save();

      const updatedUser: any = await this._repoObj.findById(_id);

      const totalPrice = updatedUser.cart.products.reduce((sum: number, b: any) => {
        const price =
          (b.product.price - (b.product.discount / 100) * b.product.price) * b.count;

        return sum + price;
      }, 0);

      console.log(totalPrice);

      updatedUser.cart.totalPrice = totalPrice;
      await updatedUser.save();

      // get updated cart
      return updatedUser.cart;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async changePassword(
    _id: mongoose.Types.ObjectId,
    updatedPassword: string,
    oldPassword: string
  ) {
    try {
      const user: any = await this._repoObj.findById(_id);
      // user.password = updatedPassword;

      if (!bcrypt.compareSync(oldPassword, user?.password)) {
        throw new Error('enter a valid password');
      } else if (bcrypt.compareSync(updatedPassword, user?.password)) {
        throw new Error('enter different password');
      }
      user.password = bcrypt.hashSync(updatedPassword, 10);

      await user.save();

      return user;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async updateCart(_id: mongoose.Types.ObjectId | number, cart: UserCart) {
    try {
      const user: any = await this._repoObj.findById(_id);

      user.cart = cart;
      await user.save();

      return user.cart;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async getCart(_id: mongoose.Types.ObjectId | number) {
    try {
      const user: any = await this._repoObj.findById(_id);

      return user.cart;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async deleteFromCart(
    _id: mongoose.Types.ObjectId | number,
    productId: mongoose.Types.ObjectId
  ) {
    try {
      const user: any = await this._repoObj.findById(_id);
      user.cart.products = user.cart.products.filter((product: any) => {
        if (product.product._id.toString() !== productId) return true;
        const productPrice =
          (product.product.price -
            (product.product.discount / 100) * product.product.price) *
          product.count;
        user.cart.totalPrice -= productPrice;

        return false;
      });

      await user.save();

      return user.cart;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async addToWishList(
    _id: mongoose.Types.ObjectId | number,
    product: { product: mongoose.Types.ObjectId; count: number }
  ) {
    try {
      const user: any = await this._repoObj.findById(_id);
      // check if product is exist in wishList
      user.wishList.products.forEach((item: any) => {
        if (item.product._id.toString() === product.product) {
          throw Error('product already added');
        }
      });

      user.wishList.products.push(product);
      await user.save();

      const updatedUser: any = await this._repoObj.findById(_id);

      console.log(updatedUser.wishList.products);

      const totalPrice = updatedUser.wishList.products.reduce(
        (sum: number, b: any) => {
          const price =
            (b.product.price - (b.product.discount / 100) * b.product.price) *
            b.count;

          return sum + price;
        },
        0
      );

      console.log(totalPrice);

      updatedUser.wishList.totalPrice = totalPrice;
      await updatedUser.save();

      // get updated cart
      return updatedUser.wishList;
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
      await user.save();

      return user.wishList;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async getWishList(_id: mongoose.Types.ObjectId | number) {
    try {
      const user: any = await this._repoObj.findById(_id);

      return user.wishList;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }

  async deleteFromWishList(
    _id: mongoose.Types.ObjectId,
    productId: mongoose.Types.ObjectId
  ) {
    try {
      const user: any = await this._repoObj.findById(_id);
      console.log(user);

      user.wishList.products = user.wishList.products.filter((product: any) => {
        if (product.product._id.toString() !== productId) return true;

        const productPrice =
          (product.product.price -
            (product.product.discount / 100) * product.product.price) *
          product.count;
        user.wishList.totalPrice -= productPrice;

        return false;
      });

      await user.save();

      return user.wishList;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }
}
