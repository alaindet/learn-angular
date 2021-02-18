import { Action } from '@ngrx/store';

import { Product } from '../../types';
import { ProductsActionType } from '../actions';

export interface ProductsAction extends Action {
  type: ProductsActionType;
}

export interface AddProductAction extends ProductsAction {
  type: ProductsActionType.Add;
  payload: {
    product: Product;
  };
}

export interface SelectProductAction extends ProductsAction {
  type: ProductsActionType.Select;
  payload: {
    product: Product;
  },
}

export interface DeselectProductAction extends ProductsAction {
  type: ProductsActionType.Deselect;
}

export type AnyProductsAction = (
  | AddProductAction
  | SelectProductAction
  | DeselectProductAction
);
