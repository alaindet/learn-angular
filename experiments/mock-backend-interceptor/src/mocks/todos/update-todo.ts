import { HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

import { Todo, UpdateTodoDto } from 'src/app/todos/types';
import { DataStore, RequestHandler, RouteParams } from '../lib';

export function updateTodo(params: RouteParams | null, store: DataStore): RequestHandler {
  return (req: HttpRequest<UpdateTodoDto>) => {

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

    const existing = todos.find(t => t.title === req.body?.title);
    if (existing) {
      throw new HttpErrorResponse({
        error: `Todo with title "${existing.title}" already exists`,
        status: 409,
        statusText: 'Conflict',
      });
    }

    todo = { ...todo, ...(req?.body ?? {}) };

    store['todos'] = todos.map(t => t.id === id ? todo : t);

    return of(new HttpResponse<Todo>({
      body: todo,
    }));
  }
}
