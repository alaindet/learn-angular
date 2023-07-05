import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services';

export function isAdminGuard(): boolean {

  const auth = inject(AuthService);
  const router = inject(Router);

  const isAdmin = auth.userIsAdmin();

  if (!isAdmin) {
    router.navigate(['/users/sign-in']);
  }

  return isAdmin;
}
