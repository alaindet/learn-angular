import { ActionReducerMap } from '@ngrx/store';

import { ProductsState } from '../state';
import { listReducer } from './list';
import { selectedReducer } from './selected';

export const productsReducers: ActionReducerMap<ProductsState> = {
  list: listReducer,
  selected: selectedReducer,
};
