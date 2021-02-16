import { Product } from '../../products/product';
import { ProductsAction } from './products.enum';

// TODO: Create action creators
export interface CreateProductAction {
  type: ProductsAction.Add;
  payload: Product;
}

export interface RemoveProductAction {
  type: ProductsAction.Remove;
  payload: number;
}
