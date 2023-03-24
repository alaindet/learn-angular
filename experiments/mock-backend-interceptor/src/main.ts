import { enableProdMode, importProvidersFrom } from '@angular/core';
import { ApplicationConfig, BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { environment } from './environments/environment';
import APP_ROUTES from './app/routes';
import { AppComponent } from './app/app.component';

import { MockHttpInterceptor } from './mocks/mock.intercetor';
import { MockServer } from './mocks/lib';
import { createTodo } from './mocks/todos/create-todo';
import { deleteTodo } from './mocks/todos/delete-todo';
import { getAllTodos } from './mocks/todos/get-all-todos';
import { getTodo } from './mocks/todos/get-todo';
import { updateTodo } from './mocks/todos/update-todo';

if (environment.production) {
  enableProdMode();
}

const providers: ApplicationConfig['providers'] = [
  importProvidersFrom([BrowserModule, HttpClientModule]),
  provideRouter(APP_ROUTES),
];

// TODO: Move up
const getMockServer = (): MockServer => {
  const mockServer = new MockServer(environment.apiUrl);
  mockServer.post('/todos', createTodo);
  mockServer.get('/todos', getAllTodos);
  mockServer.get('/todos/:id', getTodo);
  mockServer.patch('/todos/:id', updateTodo);
  mockServer.delete('/todos/:id', deleteTodo);
  return mockServer;
};

// TODO: Conditionally load!
if (environment.withMockServer) {
  providers.push({
    provide: HTTP_INTERCEPTORS,
    useFactory: () => new MockHttpInterceptor(getMockServer()),
    multi: true,
  });
}

bootstrapApplication(AppComponent, { providers })
  .catch(err => console.error(err));
 