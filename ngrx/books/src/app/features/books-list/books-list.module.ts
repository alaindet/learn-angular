import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookItemModule, ButtonModule } from 'src/app/shared/components';
import { BooksListComponent } from './books-list.component';

@NgModule({
  imports: [
    CommonModule,
    BookItemModule,
    ButtonModule,
  ],
  declarations: [BooksListComponent],
  exports: [BooksListComponent],
})
export class BooksListModule {}
