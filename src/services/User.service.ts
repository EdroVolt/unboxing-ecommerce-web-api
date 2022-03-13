import { UserRepo } from '../repositories/User.repo';

const userRepo = new UserRepo();

export class UserService {
  // TODO: findAll()'
  async findAll(filter: Object = {}) {
    try {
      const usersDocs = await userRepo.findAll(filter);
      return usersDocs;
    } catch (error) {
      console.error(error);
    }
  }

  // TODO: findOne()

  // TODO: createOne()

  // TODO: updateOne()

  // TODO: deleteOne()
}
