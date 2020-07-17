import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiBreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  declarations: [
    UiBreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    UiBreadcrumbsComponent,
  ]
})
export class UiBreadcrumbsModule {}
