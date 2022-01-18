import { createReducer, on } from '@ngrx/store';

import { retrievedBookList } from './actions';
import { initialState } from './state';
import { retrievedBookListReducer } from './reducers';

export const booksFeatureName = 'books';

const reducer = createReducer(
  initialState,
  on(retrievedBookList, retrievedBookListReducer)
);

export default reducer;
