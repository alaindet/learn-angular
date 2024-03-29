import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { FAKE_AUTH_HEADER_NAME } from '../constants';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user$.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        const headers = req.headers.set(FAKE_AUTH_HEADER_NAME, user.token);
        const modifiedReq = req.clone({ headers });
        return next.handle(modifiedReq);
      })
    );
  }
}
