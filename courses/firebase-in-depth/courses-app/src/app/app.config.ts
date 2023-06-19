import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';
import { FIREBASE_CONFIG } from './core/config/firebase.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(FIREBASE_CONFIG)),
      provideFirestore(() => getFirestore()),
    ]),
    // provideFirebaseApp(() => initializeApp(FIREBASE_CONFIG)),
    // provideFirestore(() => getFirestore()),
  ]
};
