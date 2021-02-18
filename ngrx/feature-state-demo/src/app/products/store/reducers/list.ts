import { ProductsActionType, AddProductAction } from '../actions';
import { ProductsState } from './../state';

export const listReducer = (
  state: ProductsState['list'] = null,
  action: AddProductAction,
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
