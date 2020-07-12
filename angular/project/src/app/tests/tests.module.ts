import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './../components/components.module';
import { DirectivesModule } from './../directives/directives.module';

import { TestTableComponent } from './components/table/table.component';
import { TestCollapsableHeaderComponent } from './components/collapsable-header/collapsable-header.component';
import { TestSquashOnScrollComponent } from './directives/squash-on-scroll/squash-on-scroll.component';
import { TestUseTemplComponent } from './components/use-templ/use-templ.component';
import { TestBooleanishComponent } from './decorators/booleanish.component';

const tests = [
  TestUseTemplComponent,
  TestTableComponent,
  TestCollapsableHeaderComponent,
  TestSquashOnScrollComponent,
  TestBooleanishComponent,
];

@NgModule({
  declarations: [...tests],
  exports: [...tests],
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
  ],
})
export class TestsModule {}
