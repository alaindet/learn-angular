import { Book } from 'src/app/shared/types';

export type CollectionState = ReadonlyArray<Book['id']>;

export const initialState: CollectionState = [];
