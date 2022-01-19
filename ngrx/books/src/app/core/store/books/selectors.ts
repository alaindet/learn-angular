import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BooksState } from './state';
import { booksFeatureName } from './feature';

export const selectBooksFeature = createFeatureSelector<BooksState>(booksFeatureName);

export const selectBooksLoading = createSelector(
  selectBooksFeature,
  booksFeature => booksFeature.isLoading,
);

export const selectBooks = createSelector(
  selectBooksFeature,
  booksFeature => booksFeature.items,
);
