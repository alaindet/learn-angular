import { FIREBASE_CONFIG } from 'src/app/core/config/firebase.config';

export const environment = {
  production: false,
  firebase: {
    config: FIREBASE_CONFIG,
    useEmulators: true,
  },
};
