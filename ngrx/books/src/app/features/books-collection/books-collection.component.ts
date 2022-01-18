import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from 'src/app/shared/types';

@Component({
  selector: 'app-books-collection',
  templateUrl: './books-collection.component.html',
  styleUrls: ['./books-collection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() removed = new EventEmitter<Book['id']>();
}
