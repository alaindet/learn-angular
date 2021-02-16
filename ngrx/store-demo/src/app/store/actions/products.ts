import { Product } from '../../products/product';
import { ProductsActionType } from './products.type';

// TODO: Create action creators?
export interface ProductsAction {
  type: ProductsActionType;
}

export interface CreateProductAction extends ProductsAction {
  type: ProductsActionType.Create;
  payload: {
    product: Product;
  };
}

export interface UpdateProductAction extends ProductsAction {
  type: ProductsActionType.Update;
  payload: {
    product: Product;
  };
}

export interface DeleteProductAction extends ProductsAction {
  type: ProductsActionType.Delete;
  payload: {
    id: Product['id'];
  };
}
