import { enableProdMode, importProvidersFrom } from '@angular/core';
import { ApplicationConfig, BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { environment } from './environments/environment';
import APP_ROUTES from './app/routes';
import { AppComponent } from './app/app.component';
import { MockHttpInterceptor } from './mocks/mock.intercetor';

if (environment.production) {
  enableProdMode();
}

const config: ApplicationConfig = {
  providers: [
    importProvidersFrom([BrowserModule, HttpClientModule]),
    provideRouter(APP_ROUTES),
    // TODO: Conditionally load?
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockHttpInterceptor,
      multi: true,
    },
  ],
};

bootstrapApplication(AppComponent, config).catch(err => console.error(err));
