import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiCardGroupComponent } from './card-group.component';

@NgModule({
  declarations: [
    UiCardGroupComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UiCardGroupComponent,
  ]
})
export class UiCardGroupModule {}
