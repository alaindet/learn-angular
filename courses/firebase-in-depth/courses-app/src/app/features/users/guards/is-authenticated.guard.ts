import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services';

export function isAuthenticatedGuard(): boolean {
  const auth = inject(AuthService);
  const router = inject(Router);

  const isSignedIn = auth.isSignedIn();

  if (!isSignedIn) {
    router.navigate(['/users/sign-in']);
  }

  return isSignedIn;
}
