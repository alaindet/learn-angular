import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Book } from 'src/app/common/types';
import { collectionFeatureName } from './feature';
import { CollectionState } from './state';
import { selectBooks } from '../books';

export const selectCollectionState = createFeatureSelector<CollectionState>(
  collectionFeatureName
);

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map(id => books.find(book => book.id === id) as Book);
  }
);
