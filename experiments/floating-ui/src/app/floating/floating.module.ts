import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingHostComponent } from './components/floating-host.component';
import { FloatingTargetDirective } from './directives/floating-target.directive';
import { FloatingTriggerDirective } from './directives/floating-trigger.directive';
import { FloatingTemplateDirective } from './directives/floating-template.directive';
import { FloatingService } from './services/floating.service';

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
