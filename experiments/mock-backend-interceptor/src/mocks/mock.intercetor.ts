import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { MockServer } from './lib';

@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {

  constructor(
    private mockServer: MockServer,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.mockServer.handle(req);
  }
}
