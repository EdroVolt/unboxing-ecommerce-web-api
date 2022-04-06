import { User, UserModel } from '../models/User.model';
import { BaseRepo } from './Base.repo';

export class UserRepo extends BaseRepo<User> {
  _collectionName: string = 'users';
  _model: Object = UserModel;
}
