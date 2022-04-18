import { Category, CategoryModel } from '../models/Category.model';
import { BaseRepo } from './Base.repo';

export class CategoryRepo extends BaseRepo<Category> {
  _collectionName: string = 'categories';
  _model: Object = CategoryModel;
}
