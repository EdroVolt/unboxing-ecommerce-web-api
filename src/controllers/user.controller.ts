import { BaseController } from './Base.controller';
import { BaseService } from '../services/Base.service';
import { UserService } from '../services/user-serviece';
import { User } from '../models/Users.model';
export class UserController extends BaseController<User> {
  _serviceObj: BaseService<{}> = new UserService();
}
