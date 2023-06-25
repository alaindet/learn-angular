import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';

import { JsonWebTokenInterceptor } from '@app/core/interceptors';
import { APP_ROUTES } from './app.routes';
import { NGRX_PROVIDERS } from './core/config/ngrx';

const CORE_PROVIDERS = [
  provideHttpClient(),
  provideRouter(APP_ROUTES),
];

const INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JsonWebTokenInterceptor,
    multi: true,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    ...CORE_PROVIDERS,
    ...INTERCEPTORS,
    ...NGRX_PROVIDERS,
  ]
};
