import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from 'src/app/shared/types';
import { GoogleBooksService } from './core/services';
import {
  selectBooks,
  selectBooksCount,
  selectBooksCollection,
  selectBooksCollectionCount,
  addBook,
  removeBook,
  retrievedBookList,
} from './core/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  books$ = this.store.select(selectBooks);
  booksCount$ = this.store.select(selectBooksCount);
  booksCollection$ = this.store.select(selectBooksCollection);
  booksCollectionCount$ = this.store.select(selectBooksCollectionCount);

  constructor(
    private booksService: GoogleBooksService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    // TODO: Move into effect
    this.booksService.getBooks().subscribe(books => {
      this.store.dispatch(
        retrievedBookList({ books })
      );
    });
  }

  onAddBookToCollection(bookId: Book['id']): void {
    this.store.dispatch(
      addBook({ bookId })
    );
  }

  onRemoveBookFromCollection(bookId: Book['id']): void {
    this.store.dispatch(
      removeBook({ bookId })
    );
  }
}
