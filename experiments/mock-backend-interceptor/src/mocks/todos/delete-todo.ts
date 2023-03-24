import { HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

import { Todo } from 'src/app/todos/types';
import { DataStore, RequestHandler, RouteParams } from '../lib';

export function deleteTodo(params: RouteParams | null, store: DataStore): RequestHandler {
  return (req: HttpRequest<any>) => {

    const id = params!['id'];

    const todos = (store['todos'] ?? []) as Todo[];
    let todo = todos.find(t => t.id === id);

    if (!todo) {
      throw new HttpErrorResponse({
        error: `No todo with id "${id}" was found`,
        status: 404,
        statusText: 'Not Found',
      });
    }

    store['todos'] = todos.filter(t => t.id !== id);

    return of(new HttpResponse<Todo>({
      body: todo,
    }));
  }
}
