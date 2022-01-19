import { createReducer, on } from '@ngrx/store';

import { initialState } from './state';
import { retrieveBooksList, retrieveBooksListSuccess, retrieveBooksListFailure } from './actions';
import { retrieveBooksListReducer, retrieveBooksListSuccessReducer, retrieveBooksListFailureReducer } from './reducers';

export const booksFeatureName = 'books';

const reducer = createReducer(
  initialState,
  on(retrieveBooksList, retrieveBooksListReducer),
  on(retrieveBooksListSuccess, retrieveBooksListSuccessReducer),
  on(retrieveBooksListFailure, retrieveBooksListFailureReducer),
);

export default reducer;
