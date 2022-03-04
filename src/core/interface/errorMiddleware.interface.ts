import { ErrorRequestHandler } from 'express';

export interface IErrorMiddleware {
  getErrorMiddleware(): ErrorRequestHandler;
}
