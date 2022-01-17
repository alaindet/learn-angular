import { Book } from 'src/app/common/types';

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<Book['id']>;
}
