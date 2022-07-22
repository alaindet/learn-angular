import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignUpModule } from './features/sign-up';
import { AlertComponentModule } from './shared/alert';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SignUpModule,
    AlertComponentModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
