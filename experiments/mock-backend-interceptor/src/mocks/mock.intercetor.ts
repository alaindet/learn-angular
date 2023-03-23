import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { environment } from 'src/environments/environment';
import { MockServer } from './lib';
import { createTodo } from './todos/create-todo';
import { deleteTodo } from './todos/delete-todo';
import { getAllTodos } from './todos/get-all-todos';
import { getTodo } from './todos/get-todo';
import { updateTodo } from './todos/update-todo';

@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {

  mockServer!: MockServer;

  constructor() {
    this.mockServer = new MockServer(environment.mockApiUrl);

    // Todos
    this.mockServer.post('/todos', createTodo);
    this.mockServer.get('/todos', getAllTodos);
    this.mockServer.get('/todos/:id', getTodo);
    this.mockServer.patch('/todos/:id', updateTodo);
    this.mockServer.delete('/todos/:id', deleteTodo);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {

    if (this.mockServer.canHandle(req.url)) {
      console.log(req);
      return this.mockServer.handle(req);
    }

    return next.handle(req);
  }
}
