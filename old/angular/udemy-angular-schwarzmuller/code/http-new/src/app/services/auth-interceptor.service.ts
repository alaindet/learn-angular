import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    // Debug
    console.log('AuthInterceptorService.intercept()...');

    const modifiedRequest = request.clone({
      headers: request.headers.append('X-Custom-Auth', 'xxx.yyy.zzz')
    });

    // Continue
    return next.handle(modifiedRequest);

  }

}
