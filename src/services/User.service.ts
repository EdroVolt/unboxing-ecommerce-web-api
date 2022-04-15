import { User } from '../models/User.model';
import { BaseService } from './Base.service';
import { UserRepo } from '../repositories/User.repo';

export class UserService extends BaseService<User> {
  _repoObj: UserRepo = new UserRepo();
}
