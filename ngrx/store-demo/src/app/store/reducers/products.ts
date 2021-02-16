import { Action, ActionReducer } from '@ngrx/store';

import { Product } from '../../products';
import { AppState } from '../state';
import { ProductsAction, CreateProductAction, RemoveProductAction } from '../actions';

export const productsReducer: ActionReducer<AppState['products'], Action> = (
  state: AppState['products'] = [],
  action: CreateProductAction | RemoveProductAction,
) => {
  switch (action.type) {
    case ProductsAction.Add:
      return [...state, action.payload];
    case ProductsAction.Remove:
      return state.filter((prod: Product) => prod.id !== action.payload);
    default:
      return state;
  }
};
