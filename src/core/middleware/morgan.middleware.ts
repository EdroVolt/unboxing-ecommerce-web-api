import { IMiddleware } from 'core/interface/middleware.interface';
import morgan from 'morgan';

export class MoragnMiddleware implements IMiddleware {
  getMiddleware(): any {
    return morgan('dev');
  }
}
