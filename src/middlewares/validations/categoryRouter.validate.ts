import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import IRouterValidator from 'interfaces/validator.interface';

export default class categoryValidator implements IRouterValidator {
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
      await schema.validateAsync({ ...req.body, _id: req.params.id });
      next();
    } catch (err) {
      next(err);
    }
  }
}
