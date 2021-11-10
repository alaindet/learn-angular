import { ProductsActionType, AnyProductsAction } from '../actions';
import { ProductsState } from '../state';

export const selectedReducer = (
  state: ProductsState['selected'] = null,
  action: AnyProductsAction,
) => {
  switch (action.type) {

    case ProductsActionType.Select: {
      const { product } = action.payload;
      return product;
    }

    case ProductsActionType.Deselect:
      return null;

    default:
      return state;
  }
}
