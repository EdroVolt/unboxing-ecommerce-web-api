import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import IRouterValidator from 'interfaces/validator.interface';

export default class UserValidator implements IRouterValidator {
  async getOneOrDelete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = Joi.object({
      id: Joi.string().length(24).required()
    });

    try {
      await schema.validateAsync({ _id: req.params.id });
      next();
    } catch (err) {
      next(err);
    }
  }

  async post(req: Request, res: Response, next: NextFunction): Promise<void> {
    const schema = Joi.object({
      name: Joi.string().min(3).max(35).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: true }
      }),
      password: Joi.string().pattern(/^[a-zA-Z0-9]{8,20}$/),
      phoneNumber: Joi.string().length(11),
      address: Joi.object({
        city: Joi.string().min(3).max(20),
        street: Joi.string().min(3).max(20),
        government: Joi.string().min(3).max(20)
      }),
      orders: Joi.array().items(
        Joi.object({
          products: Joi.array()
            .items(
              Joi.object({
                productId: Joi.string().length(24).required(),
                count: Joi.number().min(1).required()
              }).required()
            )
            .required(),
          totalCount: Joi.number().min(1).required(),
          paymentMethod: Joi.string().valid('cash', 'visa').required()
        }).required()
      ),
      cart: Joi.array().items(
        Joi.object({
          products: Joi.array()
            .items(
              Joi.object({
                productId: Joi.string().length(24).required(),
                count: Joi.number().min(1).required()
              }).required()
            )
            .required(),
          totalCount: Joi.number().min(1).required()
        }).required()
      ),
      wishList: Joi.array().items(
        Joi.object({
          products: Joi.array()
            .items(
              Joi.object({
                productId: Joi.string().length(24).required(),
                count: Joi.number().min(1).required()
              }).required()
            )
            .required(),
          totalCount: Joi.number().min(1).required()
        }).required()
      )
    });

    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      next(err);
    }
  }

  async put(req: Request, res: Response, next: NextFunction): Promise<void> {
    const schema = Joi.object({
      id: Joi.string().length(24).required(),
      name: Joi.string().min(3).max(35).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: true }
      }),
      password: Joi.string().pattern(/^[a-zA-Z0-9]{8,20}$/),
      phoneNumber: Joi.string().length(11),
      address: Joi.object({
        city: Joi.string().min(3).max(20),
        street: Joi.string().min(3).max(20),
        government: Joi.string().min(3).max(20)
      }),
      orders: Joi.array().items(
        Joi.object({
          products: Joi.array()
            .items(
              Joi.object({
                productId: Joi.string().length(24).required(),
                count: Joi.number().min(1).required()
              }).required()
            )
            .required(),
          totalCount: Joi.number().min(1).required(),
          paymentMethod: Joi.string().valid('cash', 'visa').required()
        }).required()
      ),
      cart: Joi.array().items(
        Joi.object({
          products: Joi.array()
            .items(
              Joi.object({
                productId: Joi.string().length(24).required(),
                count: Joi.number().min(1).required()
              }).required()
            )
            .required(),
          totalCount: Joi.number().min(1).required()
        }).required()
      ),
      wishList: Joi.array().items(
        Joi.object({
          products: Joi.array()
            .items(
              Joi.object({
                productId: Joi.string().length(24).required(),
                count: Joi.number().min(1).required()
              }).required()
            )
            .required(),
          totalCount: Joi.number().min(1).required()
        }).required()
      )
    });

    try {
      await schema.validateAsync({ ...req.body, _id: req.params.id });
      next();
    } catch (err) {
      next(err);
    }
  }
}
