import { createReducer, on } from '@ngrx/store';

import { addBook, removeBook } from '../books';
import { initialState } from './state';
import { addBookReducer, removeBookReducer } from './reducers';

export const featureName = 'collection';

const reducer = createReducer(
  initialState,
  on(addBook, addBookReducer),
  on(removeBook, removeBookReducer),
);

export default reducer;
