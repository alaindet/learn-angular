import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BooksState } from './state';
import { booksFeatureName } from './feature';

export const selectBooks = createFeatureSelector<BooksState>(booksFeatureName);

export const selectBooksCount = createSelector(
  selectBooks,
  books => books.length,
);
