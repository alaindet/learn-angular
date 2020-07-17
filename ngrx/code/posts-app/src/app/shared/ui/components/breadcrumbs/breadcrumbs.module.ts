import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiBreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  declarations: [
    UiBreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UiBreadcrumbsComponent,
  ]
})
export class UiBreadcrumbsModule {}
