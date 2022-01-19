import { retrieveBooksList, retrieveBooksListSuccess, retrieveBooksListFailure} from './actions';
import { BooksState } from './state';

export const retrieveBooksListReducer = (
  state: BooksState,
  action: ReturnType<typeof retrieveBooksList>, // TODO?
) => {
  return {
    ...state,
    isLoading: true,
  };
};

export const retrieveBooksListSuccessReducer = (
  state: BooksState,
  action: ReturnType<typeof retrieveBooksListSuccess>, // TODO?
) => {
  return {
    ...state,
    items: action.books,
    isLoading: false,
  }
};

export const retrieveBooksListFailureReducer = (
  state: BooksState,
  action: ReturnType<typeof retrieveBooksListFailure>, // TODO?
) => {
  return {
    ...state,
    isLoading: false,
  }
};
