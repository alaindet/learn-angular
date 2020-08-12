import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MannequinAlertModule } from 'mannequin-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MannequinAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
