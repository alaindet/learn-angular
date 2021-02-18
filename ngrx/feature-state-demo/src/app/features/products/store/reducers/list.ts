import { ProductsActionType, AnyProductsAction } from '../actions';
import { ProductsState } from './../state';

export const listReducer = (
  state: ProductsState['list'] = [],
  action: AnyProductsAction,
) => {
  switch (action.type) {

    case ProductsActionType.Add: {
      const { product } = action.payload;
      return [...state, product];
    }

    default:
      return state;
  }
}
