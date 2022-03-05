import cors from 'cors';
import { IMiddleware } from 'core/interface/middleware.interface';

export class CorsMiddleware implements IMiddleware {
  getMiddleware(): any {
    return cors();
  }
}
