import { createSelector, createFeatureSelector } from '@ngrx/store';

import { Book } from 'src/app/shared/types';
import { collectionFeatureName } from './feature';
import { CollectionState } from './state';
import { selectBooks } from '../books';

export const selectCollectionFeature = createFeatureSelector<CollectionState>(
  collectionFeatureName
);

export const selectBooksCollection = createSelector(
  selectBooks,
  selectCollectionFeature,
  (books, collection) => {
    return collection.map(id => books.find(book => book.id === id) as Book);
  }
);
