import { createSelector, createFeatureSelector } from '@ngrx/store';

import { featureName } from './feature';
import { CollectionState } from './state';
import { selectBooks } from '../books';

export const selectCollectionState = createFeatureSelector<CollectionState>(featureName);

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map(id => books.find(book => book.id === id));
  }
);
