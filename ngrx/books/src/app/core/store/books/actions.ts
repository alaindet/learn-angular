import { createAction, props } from '@ngrx/store';

import { Book } from 'src/app/common/types';

export const addBook = createAction(
  '[Books] Add book',
  props<{ bookId: string }>()
);

export const removeBook = createAction(
  '[Books] Remove book',
  props<{ bookId: string }>()
);

export const retrievedBookList = createAction(
  '[Books] Retrieve books success',
  props<{ books: ReadonlyArray<Book> }>()
);
