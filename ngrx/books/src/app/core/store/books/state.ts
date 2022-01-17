import { Book } from 'src/app/common/types';

export type BooksState = ReadonlyArray<Book>;

export const initialState: BooksState = [];
