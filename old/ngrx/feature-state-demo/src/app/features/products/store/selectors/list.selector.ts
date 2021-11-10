import { createSelector } from '@ngrx/store';

import { ProductsState } from '../state';
import { getProductsFeature } from './products.selector';

export const getProductsList = createSelector(
  getProductsFeature,
  (state: ProductsState) => state.list,
);
