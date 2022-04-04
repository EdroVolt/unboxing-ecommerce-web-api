import { NextFunction, Request, Response } from 'express';

export default interface IRouterValidator {
  /**
   *
   * @param req
   * @param res
   * @param next
   *
   * @ validate get request id in params [ exist and with type ObjectId ]
   */
  getOneOrDelete(req: Request, res: Response, next: NextFunction): Promise<void>;

  /**
   *
   * @param req
   * @param res
   * @param next
   *
   * @ validate post request body [ exist and with type "schema" ]
   */
  post(req: Request, res: Response, next: NextFunction): Promise<void>;

  /**
   *
   * @param req
   * @param res
   * @param next
   *
   * @ validate put request body [ exist and with type "schema" ]
   */
  put(req: Request, res: Response, next: NextFunction): Promise<void>;
}
