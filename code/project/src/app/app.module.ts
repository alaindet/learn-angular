import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TestsModule } from './tests/tests.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TestsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
