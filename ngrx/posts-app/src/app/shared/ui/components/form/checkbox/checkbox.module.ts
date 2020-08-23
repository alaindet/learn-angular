import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UiFormCheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [UiFormCheckboxComponent],
  exports: [UiFormCheckboxComponent],
})
export class UiFormCheckboxModule {}
