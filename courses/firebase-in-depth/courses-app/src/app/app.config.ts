import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator } from '@angular/fire/functions';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { connectStorageEmulator, getStorage, provideStorage } from '@angular/fire/storage';

import { routes } from './app.routes';
import { environment } from 'src/environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebase.config)),
      provideFirestore(() => {
        const firestore = getFirestore();
        if (environment.firebase.useEmulators) {
          connectFirestoreEmulator(firestore, 'localhost', 8080);
        }
        return firestore;
      }),
      // provideAuth(() => {
      //   const auth = getAuth();
      //   if (environment.firebase.useEmulators) {
      //     connectAuthEmulator(auth, 'http://localhost:9099');
      //   }
      //   return auth;
      // }),
      // provideFunctions(() => {
      //   const functions = getFunctions();
      //   if (environment.firebase.useEmulators) {
      //     connectFunctionsEmulator(functions, 'localhost', 5001);
      //   }
      //   return functions;
      // }),
      // provideStorage(() => {
      //   const storage = getStorage();
      //   // TODO: Use emulators?
      //   return storage;
      // }),
    ]),
  ]
};
