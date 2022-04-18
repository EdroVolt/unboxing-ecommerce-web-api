import { IMiddleware } from 'core/interface/middleware.interface';
import bodyParser from 'body-parser';

export class BodyParserMiddleware implements IMiddleware {
  getMiddleware(): any {
    return [bodyParser.urlencoded({ extended: false }), bodyParser.json()];
  }
}
