import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import IRouterValidator from 'interfaces/validator.interface';

export default class CategoryValidator implements IRouterValidator {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    const schema = Joi.object({
      page: Joi.number().min(1).max(50000),
      name: Joi.string().length(50)
    });

    try {
      await schema.validateAsync({ ...req.body });
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
      name: Joi.string().min(3).max(30).required(),
      image: Joi.string().required()
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
      name: Joi.string().min(3).max(30).required(),
      image: Joi.string().required()
    });
    try {
      await schema.validateAsync({ ...req.body, id: req.params.id });
      next();
    } catch (err) {
      next(err);
    }
  }
}
