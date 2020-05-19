import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SquashOnScrollContainerDirective } from './container.directive';
import { SquashOnScrollItemDirective } from './item.directive';

const directives = [
  SquashOnScrollContainerDirective,
  SquashOnScrollItemDirective
];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
  imports: [CommonModule],
})
export class SquashOnScrollModule {}
