import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SignUpComponent } from './sign-up.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SignUpComponent],
  exports: [SignUpComponent],
})
export class SignUpModule {}
