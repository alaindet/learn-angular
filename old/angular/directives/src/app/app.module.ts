import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowcaseModule } from './showcase/showcase.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ShowcaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
