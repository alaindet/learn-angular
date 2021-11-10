import { createSelector } from '@ngrx/store';

import { ProductsState } from '../state';
import { getProductsFeature } from './products.selector';

export const getSelectedProduct = createSelector(
  getProductsFeature,
  (state: ProductsState) => state.selected,
);
