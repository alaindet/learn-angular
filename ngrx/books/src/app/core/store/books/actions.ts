import { createAction, props } from '@ngrx/store';

import { Book } from 'src/app/shared/types';

export enum BookAction {
  Add = '[Books] Add book',
  Remove = '[Books] Remove book',
  Retrieve = '[Books] Retrieve books',
  RetrieveSuccess = '[Books] Retrieve books success',
  RetrieveFailure = '[Books] Retrieve books failure',
}

export const addBook = createAction(
  BookAction.Add,
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  BookAction.Remove,
  props<{ bookId: string }>()
);

export const retrieveBooksList = createAction(
  BookAction.Retrieve,
);

export const retrieveBooksListSuccess = createAction(
  BookAction.RetrieveSuccess,
  props<{ books: ReadonlyArray<Book> }>()
);

export const retrieveBooksListFailure = createAction(
  BookAction.RetrieveFailure,
);
