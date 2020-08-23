import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiChipComponent } from './chip.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UiChipComponent],
  exports: [UiChipComponent],
})
export class UiChipModule {}
