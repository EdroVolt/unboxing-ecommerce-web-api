import { User } from 'models/Users.model';
import { UserRepo } from '../repositories/User.repo';

const userRepo = new UserRepo();

export class UserService {
  // TODO: findAll()

  // TODO: findOne()

  // TODO: createOne()
  async createOne(data: User) {
    try {
      const usersDoc = await userRepo.create(data);
      return usersDoc;
    } catch (error) {
      console.error(error);
    }
  }

  // TODO: updateOne()

  // TODO: deleteOne()
}
