import express from 'express';
import dotenv from 'dotenv';
import { IMiddleware } from './interface/middleware.interface';
import { IRouterCustom } from './interface/router.interface';
import { ErrorMiddleware } from './middleware/error.middleware';
import './Database/connection';
dotenv.config();

export class Server {
  private readonly _server = express();
  constructor() {
    this._server.use(express.static('uploads'));
  }

  middleware(mw: IMiddleware) {
    this._server.use(mw.getMiddleware());
  }

  errorMiddleware(errMw: ErrorMiddleware) {
    this._server.use(errMw.getErrorMiddleware());
  }

  route(router: IRouterCustom) {
    this._server.use(router.getRouter());
  }

  listen(PORT: number) {
    this._server.listen(PORT, () => {
      console.log(`server is running on port: ${PORT}`);
    });
  }
}
