import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from 'src/app/common/types';
import { GoogleBooksService } from './services';
import { selectBooks, selectBookCollection, addBook, removeBook, retrievedBookList } from './core/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

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
