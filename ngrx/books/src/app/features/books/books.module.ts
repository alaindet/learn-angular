import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooksComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BooksComponent,
  ],
  exports: [
    BooksComponent,
  ],
})
export class BooksModule {}
