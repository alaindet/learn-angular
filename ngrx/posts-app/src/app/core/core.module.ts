import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiCoreService } from './services/ui.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    UiCoreService,
  ]
})
export class CoreModule {}
