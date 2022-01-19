import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookItemModule, ButtonModule } from 'src/app/shared/components';
import { BooksCollectionComponent } from './books-collection.component';

@NgModule({
  imports: [
    CommonModule,
    BookItemModule,
    ButtonModule,
  ],
  declarations: [BooksCollectionComponent],
  exports: [BooksCollectionComponent],
})
export class BooksCollectionModule {}
