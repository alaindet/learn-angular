import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from 'src/app/shared/types';
import {
  selectBooks,
  selectBooksLoading,
  selectBooksCollection,
  addBook,
  removeBook,
  retrieveBooksList,
} from 'src/app/core/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  books$ = this.store.select(selectBooks);
  booksLoading$ = this.store.select(selectBooksLoading);
  booksCollection$ = this.store.select(selectBooksCollection);

  constructor(
    private store: Store,
  ) {}

  onFetchBooks(): void {
    this.store.dispatch(retrieveBooksList());
  }

  onAddBookToCollection(bookId: Book['id']): void {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemoveBookFromCollection(bookId: Book['id']): void {
    this.store.dispatch(removeBook({ bookId }));
  }
}
