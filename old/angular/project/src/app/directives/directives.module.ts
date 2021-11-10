import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SquashOnScrollModule } from './squash-on-scroll/squash-on-scroll.module';

const directives = [

];

@NgModule({
  declarations: [...directives],
  imports: [
    CommonModule,
    SquashOnScrollModule,
  ],
  exports: [
    SquashOnScrollModule,
    ...directives,
  ],
})
export class DirectivesModule {}
