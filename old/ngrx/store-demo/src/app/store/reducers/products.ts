import { Action, ActionReducer } from '@ngrx/store';

import { Product } from '../../products';
import { AppState } from '../state';
import { ProductsActionType, ProductsAction } from '../actions';

export const productsReducer: ActionReducer<AppState['products'], Action> = (
  products: AppState['products'] = [],
  action: ProductsAction,
) => {
  switch (action.type) {

    case ProductsActionType.Create: {
      const { product } = action.payload;
      return [...products, product];
    }

    case ProductsActionType.Update: {
      const { product } = action.payload;
      const id = product.id;
      return products
        .map((prod: Product): Product => prod.id === id ? product : prod);
    }

    case ProductsActionType.Delete: {
      const { id } = action.payload;
      return products
        .filter((prod: Product): boolean => prod.id !== id);
    }

    default:
      return products;

  }
};
