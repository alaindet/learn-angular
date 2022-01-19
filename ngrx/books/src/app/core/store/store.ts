import { StoreDevtoolsOptions } from '@ngrx/store-devtools';

import books, { BooksEffects } from './books';
import collection from './collection';

export const reducers = {
  books,
  collection,
};

export const effects = [
  BooksEffects,
];

export const devToolsConfig: StoreDevtoolsOptions = {
  maxAge: 25,
};
