import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseOnScrollDirective } from './collapse-on-scroll/collapse-on-scroll.directive';
import { CollapseOnScrollItemDirective } from './collapse-on-scroll-item/collapse-on-scroll-item.directive';

const directives = [
  CollapseOnScrollDirective,
  CollapseOnScrollItemDirective
];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
  imports: [
    CommonModule,
  ],
})
export class DirectivesModule {}
