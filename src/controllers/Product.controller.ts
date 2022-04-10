import { Product } from '../models/Product.model';
import { BaseService } from '../services/Base.service';
import { ProductService } from '../services/Product.service';
import { BaseController } from './Base.controller';

export class ProductController extends BaseController<Product> {
  _serviceObj: BaseService<{}> = new ProductService();
}
