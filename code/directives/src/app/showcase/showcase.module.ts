import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipsComponent } from './containers/tooltips/tooltips.component';
import { VendorTooltipModule } from 'src/app/vendor/ng2-tooltip-directive.module';

@NgModule({
  declarations: [
    TooltipsComponent,
  ],
  imports: [
    CommonModule,
    VendorTooltipModule,
  ],
  exports: [
    TooltipsComponent,
  ]
})
export class ShowcaseModule {}
