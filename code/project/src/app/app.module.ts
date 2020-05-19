import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UseTemplComponent } from './components/use-templ/use-templ.component';
import { TestUseTemplComponent } from './tests/components/use-templ/use-templ.component';
import { TableComponent } from './components/table/table.component';
import { TestTableComponent } from './tests/components/table/table.component';
import { CollapsableHeaderComponent } from './components/collapsable-header/collapsable-header.component';
import { TestCollapsableHeaderComponent } from './tests/components/collapsable-header/collapsable-header.component';

const components = [
  UseTemplComponent,
  TableComponent,
  CollapsableHeaderComponent,
];

const componentsTests = [
  TestUseTemplComponent,
  TestTableComponent,
  TestCollapsableHeaderComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...componentsTests,
    CollapsableHeaderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
