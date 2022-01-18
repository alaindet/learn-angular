import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { BooksCollectionComponent } from './books-collection.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [BooksCollectionComponent],
  exports: [BooksCollectionComponent],
})
export class BooksCollectionModule {}
