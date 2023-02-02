import { enableProdMode, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { environment } from './environments/environment';
import APP_ROUTES from './app/routes';

if (environment.production) {
  enableProdMode();
}

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([BrowserModule, HttpClientModule]),
    provideRouter(APP_ROUTES),
  ],
}).catch(err => console.error(err));
