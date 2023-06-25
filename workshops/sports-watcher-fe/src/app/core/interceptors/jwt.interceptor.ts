import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { switchMap } from 'rxjs';
import { Store } from '@ngrx/store';

import { selectUserToken } from '@app/features/user/store';

@Injectable()
export class JsonWebTokenInterceptor implements HttpInterceptor {

  private store = inject(Store);

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select(selectUserToken).pipe(switchMap(token => {

      if (!token) {
        return next.handle(req);
      }

      const reqWithAuth = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      return next.handle(reqWithAuth);
    }));
  }
}
