import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookItemActionDirective, BookItemComponent, ButtonComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BookItemComponent,
    BookItemActionDirective,
    ButtonComponent,
  ],
  exports: [
    BookItemComponent,
    BookItemActionDirective,
    ButtonComponent,
  ],
})
export class SharedModule {}
