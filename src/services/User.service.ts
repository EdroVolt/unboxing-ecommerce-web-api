import { UserRepo } from '../repositories/User.repo';

const userRepo = new UserRepo();

export class UserService {
  // TODO: findAll()

  // TODO: findOne()

  // TODO: createOne()

  // TODO: updateOne()
  async updateOne(_id: mongoose.Types.ObjectId | number) {
    try {
      const userDoc = await userRepo.updateOne(_id);
      return userDoc;
    } catch (err) {
      console.log(err);
    }
  }
  // TODO: deleteOne()
}
