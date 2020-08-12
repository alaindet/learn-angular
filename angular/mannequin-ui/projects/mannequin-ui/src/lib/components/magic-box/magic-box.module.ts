import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MannequinMagicBoxComponent } from './magic-box.component';

@NgModule({
  declarations: [MannequinMagicBoxComponent],
  imports: [CommonModule],
  exports: [MannequinMagicBoxComponent],
})
export class MannequinMagicBoxModule {}
