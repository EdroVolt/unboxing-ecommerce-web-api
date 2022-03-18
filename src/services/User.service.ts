import { UserRepo } from '../repositories/User.repo';

const userRepo = new UserRepo();

export class UserService {
  // TODO: findAll()

  // TODO: findOne()

  // TODO: createOne()

  // TODO: updateOne()
  async updateOne(_id: mongoose.Types.ObjectId | number, data: object) {
    try {
      const userDoc = await userRepo.updateOne(_id, data);
      return userDoc;
    } catch (err) {
      console.log(err);
    }
  }
  // TODO: deleteOne()
}
