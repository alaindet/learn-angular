import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingTargetDirective } from './floating-target.directive';
import { FloatingTriggerDirective } from './floating-trigger.directive';
import { FloatingHostComponent } from './floating-host.component';
import { FloatingTemplateDirective } from './floating-template.directive';
import { FloatingService } from './floating.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FloatingTargetDirective,
    FloatingTriggerDirective,
    FloatingTemplateDirective,
    FloatingHostComponent,
  ],
  exports: [
    FloatingTargetDirective,
    FloatingTriggerDirective,
    FloatingTemplateDirective,
    FloatingHostComponent,
  ],
  providers: [
    FloatingService,
  ],
})
export class FloatingModule {}