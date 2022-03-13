import { UserRepo } from '../repositories/User.repo';

const userRepo = new UserRepo();

export class UserService {
  // TODO: findAll()

  // TODO: findOne()

  async findOne(_id: mongoose.Types.ObjectId | number) {
    try {
      const userDoc = await userRepo.findById(_id);
      return userDoc;
    } catch (err) {
      console.log(err);
    }
  }

  // TODO: createOne()

  // TODO: updateOne()

  // TODO: deleteOne()
}
