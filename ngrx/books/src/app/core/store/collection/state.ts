import { Book } from 'src/app/common/types';

export type CollectionState = ReadonlyArray<Book['id']>;

export const initialState: CollectionState = [];
