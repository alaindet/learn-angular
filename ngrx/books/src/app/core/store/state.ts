import { Book } from 'src/app/shared/types';

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<Book['id']>;
}
