import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UiFormRadioComponent } from './radio.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [UiFormRadioComponent],
  exports: [UiFormRadioComponent],
})
export class UiFormRadioModule {}
