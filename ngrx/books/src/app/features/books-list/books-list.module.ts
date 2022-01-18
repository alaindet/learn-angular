import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { BooksListComponent } from './books-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [BooksListComponent],
  exports: [BooksListComponent],
})
export class BooksListModule {}
