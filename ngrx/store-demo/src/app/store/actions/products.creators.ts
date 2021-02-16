import { createAction, props } from '@ngrx/store';

import { Product } from '../../products';
import { ProductsActionType } from './products.types';
import {
  CreateProductAction,
  UpdateProductAction,
  DeleteProductAction,
} from './products.actions';

export const createProduct: (
  payload: { product: Product }
) => CreateProductAction = createAction(
  ProductsActionType.Create,
  props<{ product: Product }>(),
);

export const updateProduct: (
  payload: { product: Product }
) => UpdateProductAction = createAction(
  ProductsActionType.Update,
  props<{ product: Product }>(),
);

export const deleteProduct: (
  payload: { id: Product['id'] }
) => DeleteProductAction = createAction(
  ProductsActionType.Delete,
  props<{ id: Product['id'] }>(),
);
