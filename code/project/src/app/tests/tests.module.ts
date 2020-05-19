import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './../components/components.module';

import { TestTableComponent } from './components/table/table.component';
import { TestCollapsableHeaderComponent } from './components/collapsable-header/collapsable-header.component';
import { TestCollapseOnScrollComponent } from './directives/collapse-on-scroll/collapse-on-scroll.component';
import { TestUseTemplComponent } from './components/use-templ/use-templ.component';

const tests = [
  TestUseTemplComponent,
  TestTableComponent,
  TestCollapsableHeaderComponent,
  TestCollapseOnScrollComponent,
];

@NgModule({
  declarations: [...tests],
  exports: [...tests],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
})
export class TestsModule {}
