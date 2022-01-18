import { Book } from 'src/app/shared/types';

export type BooksState = ReadonlyArray<Book>;

export const initialState: BooksState = [];
