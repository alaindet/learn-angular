import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiColComponent } from './col/col.component';
import { UiRowComponent } from './row/row.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UiColComponent,
    UiRowComponent,
  ],
  exports: [
    UiColComponent,
    UiRowComponent,
  ],
})
export class UiGridModule {}
