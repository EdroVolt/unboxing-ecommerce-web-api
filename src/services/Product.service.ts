import { Product } from '../models/Product.model';
import { BaseRepo } from '../repositories/Base.repo';
import { ProductRepo } from '../repositories/Product.repo';
import { BaseService } from './Base.service';

export class ProductService extends BaseService<Product> {
  _repoObj: BaseRepo<{}> = new ProductRepo();
}
