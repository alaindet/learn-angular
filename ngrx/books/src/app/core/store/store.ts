import books, { BooksEffects } from './books';
import collection from './collection';

export const reducers = {
  books,
  collection,
};

export const effects = [
  BooksEffects,
];
