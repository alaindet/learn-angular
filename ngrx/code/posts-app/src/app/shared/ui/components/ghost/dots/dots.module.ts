import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiGhostDotsComponent } from './dots.component';

@NgModule({
  declarations: [
    UiGhostDotsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UiGhostDotsComponent,
  ]
})
export class UiGhostDotsModule {}
