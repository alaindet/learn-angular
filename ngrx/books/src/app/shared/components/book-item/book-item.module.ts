import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookItemComponent } from './book-item.component';
import { BookItemActionDirective } from './book-item-action.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BookItemComponent,
    BookItemActionDirective,
  ],
  exports: [
    BookItemComponent,
    BookItemActionDirective,
  ],
})
export class BookItemModule {}
