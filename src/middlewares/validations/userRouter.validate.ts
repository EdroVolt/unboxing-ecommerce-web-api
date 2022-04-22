import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import IRouterValidator from 'interfaces/validator.interface';

export default class UserValidator implements IRouterValidator {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    const schema = Joi.object({
      page: Joi.number().min(1).max(50000),
      name: Joi.string().length(50),
      fields: Joi.string().length(100)
      // TODO: city, government
    });

    try {
      await schema.validateAsync({ ...req.query });
      next();
    } catch (err) {
      next(err);
    }
  }

  async getOneOrDelete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const schema = Joi.object({
      id: Joi.string().length(24).required()
    });

    try {
      await schema.validateAsync({ id: req.params.id });
      next();
    } catch (err) {
      next(err);
    }
  }

  async post(req: Request, res: Response, next: NextFunction): Promise<void> {
    const schema = Joi.object({
      name: Joi.string().min(3).max(35).required(),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: true }
        })
        .required(),
      password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{8,20}$/)
        .required(),
      phoneNumber: Joi.string().length(10),
      address: Joi.object({
        city: Joi.string().min(3).max(20),
        street: Joi.string().min(3).max(20),
        government: Joi.string().min(3).max(20)
      })
      // orders: Joi.array().items(
      //   Joi.object({
      //     products: Joi.array()
      //       .items(
      //         Joi.object({
      //           product: Joi.string().length(24).required(),
      //           count: Joi.number().min(1).required(),
      //           size: Joi.string().max(15).required()
      //         }).required()
      //       )
      //       .required(),
      //     totalCount: Joi.number().min(1).required(),
      //     paymentMethod: Joi.string().valid('cash', 'visa').required()
      //   }).required()
      // ),
      // cart: Joi.array().items(
      //   Joi.object({
      //     products: Joi.array()
      //       .items(
      //         Joi.object({
      //           productId: Joi.string().length(24).required(),
      //           count: Joi.number().min(1).required()
      //         }).required()
      //       )
      //       .required(),
      //     totalCount: Joi.number().min(1).required()
      //   }).required()
      // ),
      // wishList: Joi.array().items(
      //   Joi.object({
      //     products: Joi.array()
      //       .items(
      //         Joi.object({
      //           productId: Joi.string().length(24).required(),
      //           count: Joi.number().min(1).required()
      //         }).required()
      //       )
      //       .required(),
      //     totalCount: Joi.number().min(1).required()
      //   }).required()
      // )
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
      _id: Joi.string().length(24),
      name: Joi.string().min(3).max(35).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: true }
      }),
      password: Joi.string(),
      phoneNumber: Joi.string().length(10),
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
                product: Joi.string().length(24).required(),
                count: Joi.number().min(1).required(),
                size: Joi.string().max(15).required()
              }).required()
            )
            .required(),
          totalCount: Joi.number().min(1).required(),
          paymentMethod: Joi.string().valid('cash', 'visa').required()
        })
      ),
      cart: Joi.object({
        products: Joi.array()
          .items(
            Joi.object({
              product: Joi.string().length(24).required(),
              count: Joi.number().min(1).required()
            }).required()
          )
          .required(),
        totalPrice: Joi.number().min(1)
      }),
      wishList: Joi.object({
        products: Joi.array().items(
          Joi.object({
            product: Joi.string().length(24).required(),
            count: Joi.number().min(1).required()
          })
        ),
        totalPrice: Joi.number().min(0)
      })
    });

    try {
      await schema.validateAsync({ ...req.body, _id: req.params.id });
      next();
    } catch (err) {
      next(err);
    }
  }
}
