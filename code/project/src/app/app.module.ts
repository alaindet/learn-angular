import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UseTemplateComponent } from './components/use-template/use-template.component';
import { TestUseTemplateComponent } from './tests/components/use-template/use-template.component';
import { TableComponent } from './components/table/table.component';
import { TestTableComponent } from './tests/components/table/table.component';

const components = [
  UseTemplateComponent,
  TableComponent,
];

const componentsTests = [
  TestUseTemplateComponent,
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
