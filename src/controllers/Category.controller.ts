import { Category } from '../models/Category.model';
import { BaseController } from './Base.controller';
import { CategoryService } from '../services/Category.service';

export class CategoryController extends BaseController<Category> {
  _serviceObj: CategoryService = new CategoryService();
}
