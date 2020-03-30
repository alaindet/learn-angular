import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UseTemplComponent } from './components/use-templ/use-templ.component';
import { TestUseTemplComponent } from './tests/components/use-templ/use-templ.component';
import { TableComponent } from './components/table/table.component';
import { TestTableComponent } from './tests/components/table/table.component';

const components = [
  UseTemplComponent,
  TableComponent,
];

const componentsTests = [
  TestUseTemplComponent,
  TestTableComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...componentsTests,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
