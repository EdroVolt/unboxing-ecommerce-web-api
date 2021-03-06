import { Request, Response, NextFunction } from 'express';
import IRouterValidator from 'interfaces/validator.interface';
import Joi from 'joi';

export default class ProductValidator implements IRouterValidator {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    const schema = Joi.object({
      page: Joi.number().min(1).max(50000),
      category: Joi.string().length(24).required(),
      name: Joi.string().length(50),
      offer: Joi.boolean(),
      fields: Joi.string().length(100)
      // TODO: maxPrice and minPrice
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
      description: Joi.string().required(),
      count: Joi.number(),
      sizeCount: Joi.object({
        xs: Joi.number(),
        s: Joi.number(),
        md: Joi.number(),
        l: Joi.number(),
        xl: Joi.number()
      }),
      category: Joi.string().length(24).required(),
      ingredients: Joi.array().items(Joi.string()),
      images: Joi.array().items(Joi.string()),
      price: Joi.number().required(),
      discount: Joi.number(),
      offer: Joi.boolean(),
      reviews: Joi.array().items(
        Joi.object({
          userId: Joi.string().length(24).required(),
          comment: Joi.string().min(2).max(200),
          rate: Joi.number()
        })
      ),
      numOfReviews: Joi.number()
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
      description: Joi.string().required(),
      count: Joi.number(),
      sizeCount: Joi.object({
        xs: Joi.number(),
        s: Joi.number(),
        md: Joi.number(),
        l: Joi.number(),
        xl: Joi.number()
      }),
      categoryId: Joi.string().length(24).required(),
      ingredients: Joi.array().items(Joi.string()),
      images: Joi.array().items(Joi.string()),
      price: Joi.number().required(),
      discount: Joi.number(),
      offer: Joi.boolean(),
      reviews: Joi.array().items(
        Joi.object({
          userId: Joi.string().length(24).required(),
          comment: Joi.string().min(2).max(200),
          rate: Joi.number()
        })
      ),
      numOfReviews: Joi.number()
    });

    try {
      await schema.validateAsync({ ...req.body, id: req.params.id });
      next();
    } catch (err) {
      next(err);
    }
  }
}
