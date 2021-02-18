import { ProductsActionType, SelectProductAction } from '../actions';
import { ProductsState } from '../state';

export const selectedReducer = (
  state: ProductsState['selected'] = null,
  action: SelectProductAction,
) => {
  switch (action.type) {
    case ProductsActionType.Select: {
      const { product } = action.payload;
      return product;
    }
    default:
      return state;
  }
}
