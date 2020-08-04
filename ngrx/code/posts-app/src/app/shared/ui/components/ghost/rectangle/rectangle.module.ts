import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiGhostRectangleComponent } from './rectangle.component';

@NgModule({
  declarations: [
    UiGhostRectangleComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UiGhostRectangleComponent,
  ]
})
export class UiGhostRectangleModule { }
