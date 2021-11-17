import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[],
  ): Observable<true | UrlTree> {
    return this.checkAuth();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): Observable<true | UrlTree> {
    return this.checkAuth();
  }

  private checkAuth(): Observable<true | UrlTree> {
    return this.authService.user$.pipe(
      take(1),
      map(user => !!user ? true : this.router.createUrlTree(['/auth']))
    );
  }
}
