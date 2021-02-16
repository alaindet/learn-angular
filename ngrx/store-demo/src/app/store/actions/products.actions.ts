import { Action } from '@ngrx/store';

import { Product } from '../../products/product';
import { ProductsActionType } from './products.types';

export interface CreateProductAction extends Action {
  type: ProductsActionType.Create;
  product: Product;
}

export interface GetProductAction extends Action {
  type: ProductsActionType.Get;
  id: Product['id'];
}

export interface UpdateProductAction extends Action {
  type: ProductsActionType.Update;
  product: Product;
}

export interface DeleteProductAction extends Action {
  type: ProductsActionType.Delete;
  id: Product['id'];
}

export type ProductsAction = (
  | CreateProductAction
  | GetProductAction
  | UpdateProductAction
  | DeleteProductAction
);
