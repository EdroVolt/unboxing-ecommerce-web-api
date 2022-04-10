import { BaseController } from './Base.controller';
import { BaseService } from '../services/Base.service';
import { UserService } from '../services/User.serviece';

import { User } from '../models/User.model';

export class UserController extends BaseController<User> {
  _serviceObj: BaseService<{}> = new UserService();
}
