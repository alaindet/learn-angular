import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiItemGroupComponent } from './item-group.component';

@NgModule({
  declarations: [
    UiItemGroupComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UiItemGroupComponent,
  ]
})
export class UiItemGroupModule {}
