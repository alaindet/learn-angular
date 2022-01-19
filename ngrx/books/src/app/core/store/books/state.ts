import { Book } from 'src/app/shared/types';

export type BooksState = {
  items: ReadonlyArray<Book>;
  isLoading: boolean;
};

export const initialState: BooksState = {
  items: [],
  isLoading: false,
};
