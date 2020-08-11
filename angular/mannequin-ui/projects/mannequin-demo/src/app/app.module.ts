import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MannequinLibModule } from 'mannequin-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MannequinLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
