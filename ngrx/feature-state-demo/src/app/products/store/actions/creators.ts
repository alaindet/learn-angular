import { createAction, props } from '@ngrx/store';

import { Payload } from '../../../core/types';
import { ProductsActionType } from './types';
import { AddProductAction, SelectProductAction } from './actions';

export const addProduct: (
  payload: Payload<AddProductAction['payload']>,
) => AddProductAction = createAction(
  ProductsActionType.Add,
  props<Payload<AddProductAction['payload']>>(),
);

export const selectProduct: (
  payload: Payload<SelectProductAction['payload']>,
) => SelectProductAction = createAction(
  ProductsActionType.Select,
  props<Payload<SelectProductAction['payload']>>(),
);
