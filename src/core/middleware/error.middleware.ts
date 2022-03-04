import { IErrorMiddleware } from 'core/interface/errorMiddleware.interface';
import { ErrorRequestHandler } from 'express';

export class ErrorMiddleware implements IErrorMiddleware {
  getErrorMiddleware(): ErrorRequestHandler {
    return (error, req, res, next) => {
      // JS  code function.length
      const status: number = error.status || 500;
      res.status(status).json({ Error: error + '' });
    };
  }
}
