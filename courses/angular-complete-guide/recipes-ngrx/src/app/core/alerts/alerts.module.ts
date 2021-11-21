import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertComponent, AlertsComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AlertComponent,
    AlertsComponent,
  ],
  exports: [
    AlertComponent,
    AlertsComponent,
  ],
})
export class AlertsModule {}
