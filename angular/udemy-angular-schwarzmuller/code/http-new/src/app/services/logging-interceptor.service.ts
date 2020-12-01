import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    // Debug
    console.log('LoggingInterceptorService.intercept()...');
    console.log(request.headers);

    // Continue
    return next.handle(request)
      .pipe(
        tap(
          event => {
            if (event.type === HttpEventType.Response) {
              console.log('Incoming response', event.body);
            }
          }
        )
      );

  }

}
