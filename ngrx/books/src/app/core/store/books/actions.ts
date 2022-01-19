import { createAction, props } from '@ngrx/store';

import { Book } from 'src/app/shared/types';

export const addBook = createAction(
  '[Books] Add book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Books] Remove book',
  props<{ bookId: string }>()
);

export const retrieveBooksList = createAction(
  '[Books] Retrieve books',
);

export const retrieveBooksListSuccess = createAction(
  '[Books] Retrieve books success',
  props<{ books: ReadonlyArray<Book> }>()
);

export const retrieveBooksListFailure = createAction(
  '[Books] Retrieve books failure',
);
