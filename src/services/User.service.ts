import { UserRepo } from '../repositories/User.repo';

const userRepo = new UserRepo();

export class UserService {
  // TODO: findAll()

  // TODO: findOne()

  // TODO: createOne()

  // TODO: updateOne()

  // TODO: deleteOne()
  async deleteOne(_id: mongoose.Types.ObjectId | number) {
    try {
      const userDoc = await userRepo.deleteOne(_id);
      return userDoc;
    } catch (err) {
      console.log(err);
    }
  }
}

