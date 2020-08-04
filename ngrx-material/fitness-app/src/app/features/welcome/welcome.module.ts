import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomePageComponent } from './containers/welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    WelcomePageComponent,
  ],
  exports: [
    WelcomePageComponent,
  ]
})
export class WelcomeModule {}
