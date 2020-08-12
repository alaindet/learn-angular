import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MannequinUiModule } from 'mannequin-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MannequinUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
