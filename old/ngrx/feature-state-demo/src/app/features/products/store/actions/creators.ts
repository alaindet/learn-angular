import { createAction, props } from '@ngrx/store';

import { Payload } from 'src/app/core/types';
import { ProductsActionType } from './types';
import * as actions from './actions';

export const addProduct: (
  payload: Payload<actions.AddProductAction['payload']>,
) => actions.AddProductAction = createAction(
  ProductsActionType.Add,
  props<Payload<actions.AddProductAction['payload']>>(),
);

export const selectProduct: (
  payload: Payload<actions.SelectProductAction['payload']>,
) => actions.SelectProductAction = createAction(
  ProductsActionType.Select,
  props<Payload<actions.SelectProductAction['payload']>>(),
);

export const deselectProduct: (
  // No payload
) => actions.DeselectProductAction = createAction(
  ProductsActionType.Deselect,
);
