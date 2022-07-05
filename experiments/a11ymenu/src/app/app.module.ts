import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { A11yMenuModule } from './a11y-menu';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    A11yMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
