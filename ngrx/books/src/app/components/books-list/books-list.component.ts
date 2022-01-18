import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Book } from 'src/app/common/types';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksListComponent {

  @Input() books: ReadonlyArray<Book> = [];
  @Output() added = new EventEmitter<Book['id']>();
}
