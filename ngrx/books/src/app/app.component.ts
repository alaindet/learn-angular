import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from 'src/app/common/types';
import { GoogleBooksService } from './services';
import { selectBooks, selectBookCollection, addBook, removeBook, retrievedBookList } from './core/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(
    private booksService: GoogleBooksService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(books => {
      const action = retrievedBookList({ books });
      this.store.dispatch(action);
    });
  }

  onAddBookToCollection(bookId: Book['id']): void {
    const action = addBook({ bookId });
    this.store.dispatch(action);
  }

  onRemoveBookFromCollection(bookId: Book['id']): void {
    const action = removeBook({ bookId });
    this.store.dispatch(action);
  }
}
