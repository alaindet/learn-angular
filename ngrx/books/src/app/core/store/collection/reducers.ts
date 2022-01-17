import { addBook, removeBook } from '../books';
import { CollectionState } from './state';

export const addBookReducer = (
  state: CollectionState,
  action: ReturnType<typeof addBook>,
) => {
  const { bookId } = action;
  return state.indexOf(bookId) !== -1
    ? state
    : [...state, bookId];
};

export const removeBookReducer = (
  state: CollectionState,
  action: ReturnType<typeof removeBook>,
) => {
  const { bookId } = action;
  return state.filter(id => id !== bookId);
};
