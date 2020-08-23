import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UiPaginationComponent } from './pagination.component';
import { UiButtonModule } from './../button/button.module';

@NgModule({
  declarations: [
    UiPaginationComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    UiButtonModule,
  ],
  exports: [
    UiPaginationComponent,
  ]
})
export class UiPaginationModule {}
