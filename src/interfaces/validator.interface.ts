import { NextFunction, Request, Response } from 'express';

export default interface IRouterValidator {
  /**
   *
   * @param req
   * @param res
   * @param next
   *
   * @ validate the GET request query string [ with the same type and with no unpredictable data ]
   */
  getAll(req: Request, res: Response, next: NextFunction): Promise<void>;

  /**
   *
   * @param req
   * @param res
   * @param next
   *
   * @ validate the GET request id in params [ exist and with type ObjectId ]
   */
  getOneOrDelete(req: Request, res: Response, next: NextFunction): Promise<void>;

  /**
   *
   * @param req
   * @param res
   * @param next
   *
   * @ validate POST request body [ exist and with type "schema" ]
   */
  post(req: Request, res: Response, next: NextFunction): Promise<void>;

  /**
   *
   * @param req
   * @param res
   * @param next
   *
   * @ validate PUT request body [ exist and with type "schema" ]
   */
  put(req: Request, res: Response, next: NextFunction): Promise<void>;
}
