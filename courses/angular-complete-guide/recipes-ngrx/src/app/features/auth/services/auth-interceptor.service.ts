import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        // Just a mock authorization system
        const headers = req.headers.set('X-Recipes-Auth', user.token);
        // const headers = req.headers.set('Authotization', `Bearer ${user.token}`);
        const modifiedReq = req.clone({ headers });
        return next.handle(modifiedReq);
      })
    );
  }
}
