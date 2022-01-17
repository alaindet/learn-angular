import { retrievedBookList } from './actions';
import { BooksState } from './state';

export const retrievedBookListReducer = (
  state: BooksState,
  action: ReturnType<typeof retrievedBookList>, // TODO?
) => {
  return action.books;
};
