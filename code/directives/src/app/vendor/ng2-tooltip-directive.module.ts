import { NgModule } from '@angular/core';
import { TooltipModule, TooltipOptions } from 'ng2-tooltip-directive';

const options: TooltipOptions = {
  'show-delay': 150,
  'hide-delay': 150,
  'hide-delay-mobile': 150,
  'z-index': 1,
  'tooltip-class': 'app-tooltip',
  'animation-duration': 150,
  'content-type': 'html',
};

@NgModule({
  imports: [TooltipModule.forRoot(options)],
  exports: [TooltipModule],
})
export class VendorTooltipModule {}
