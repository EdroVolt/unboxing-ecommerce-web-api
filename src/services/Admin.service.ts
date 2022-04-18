import { Admin } from 'models/Admin.model';
import { AdminRepo } from '../repositories/Admin.repo';
import { BaseService } from './Base.service';

export class AdminService extends BaseService<Admin> {
  _repoObj = new AdminRepo();
  async findOneByEmail(email: string) {
    try {
      const doc = await this._repoObj.findByEmail(email);
      return doc;
    } catch (err: Error | any) {
      throw new Error(err.message);
    }
  }
}
