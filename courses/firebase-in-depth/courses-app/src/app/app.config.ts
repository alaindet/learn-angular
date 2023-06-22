import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';

import { routes } from './app.routes';
import { environment } from 'src/environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebase.config)),
      provideFirestore(() => {
        const firestore = getFirestore();
        // https://jsmobiledev.com/article/firebase-emulator-guide/
        // https://www.youtube.com/watch?v=B0-Rl5Vy4Fs
        connectFirestoreEmulator(firestore, 'http://localhost:9099');
        return firestore;
      }),
      // provideAuth(() => getAuth()),
      // provideFunctions(() => getFunctions()),
      // provideStorage(() => getStorage()),
    ]),
    // {
    //   provide: USE_AUTH_EMULATOR,
    //   useValue: environment.firebase.useEmulators ? ['localhost', 9099] : undefined,
    // },
    // provideFirebaseApp(() => initializeApp(FIREBASE_CONFIG)),
    // provideFirestore(() => getFirestore()),
  ]
};
