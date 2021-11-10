import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseTemplComponent } from './use-templ/use-templ.component';
import { TableComponent } from './table/table.component';
import { CollapsableHeaderComponent } from './collapsable-header/collapsable-header.component';
import { CalendarComponent } from './calendar/calendar.component';

const components = [
  UseTemplComponent,
  TableComponent,
  CollapsableHeaderComponent,
  CalendarComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
  ],
})
export class ComponentsModule {}
