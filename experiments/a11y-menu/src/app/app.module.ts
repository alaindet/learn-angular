import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { A11yMenuModule } from './a11y-menu';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    A11yMenuModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
