import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MannequinAlertComponent } from './alert.component';

@NgModule({
  declarations: [MannequinAlertComponent],
  imports: [CommonModule],
  exports: [MannequinAlertComponent],
})
export class MannequinAlertModule {}
