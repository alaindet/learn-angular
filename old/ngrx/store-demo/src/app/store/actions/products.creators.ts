import { createAction, props } from '@ngrx/store';

import { Payload } from '../types';
import { ProductsActionType } from './products.types';
import {
  CreateProductAction,
  UpdateProductAction,
  DeleteProductAction,
} from './products.actions';

export const createProduct: (
  payload: Payload<CreateProductAction['payload']>,
) => CreateProductAction = createAction(
  ProductsActionType.Create,
  props<Payload<CreateProductAction['payload']>>(),
);

export const updateProduct: (
  payload: Payload<UpdateProductAction['payload']>,
) => UpdateProductAction = createAction(
  ProductsActionType.Update,
  props<Payload<UpdateProductAction['payload']>>(),
);

export const deleteProduct: (
  payload: Payload<DeleteProductAction['payload']>,
) => DeleteProductAction = createAction(
  ProductsActionType.Delete,
  props<Payload<DeleteProductAction['payload']>>(),
);
