import { BaseRepo } from '../repositories/Base.repo';
import { CategoryRepo } from '../repositories/Category.repo';
import { Category } from '../models/Category.model';
import { BaseService } from './Base.service';

export class CategoryService extends BaseService<Category> {
    _repoObj: BaseRepo<{}>= new CategoryRepo();
}
