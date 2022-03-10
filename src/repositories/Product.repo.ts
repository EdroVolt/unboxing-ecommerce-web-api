import { Product, ProductModel } from '../models/Product.model';
import { BaseRepo } from './Base.repo';

export class ProductRepo extends BaseRepo<Product> {
    _collectionName: string = 'products';
    _model: Object = ProductModel;
}
