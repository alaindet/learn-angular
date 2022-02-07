import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingTargetDirective } from './directives/floating-target.directive';
import { FloatingTriggerDirective } from './directives/floating-trigger.directive';
import { FloatingService } from './services/floating.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FloatingTargetDirective,
    FloatingTriggerDirective,
  ],
  exports: [
    FloatingTargetDirective,
    FloatingTriggerDirective,
  ],
  providers: [
    FloatingService,
  ],
})
export class FloatingModule {}
