import { HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import {of } from 'rxjs';
import { getRandomLowerCaseLetters } from 'src/app/shared/functions';

import { CreateTodoDto, Todo } from 'src/app/todos/types';
import { DataStore, RequestHandler, RouteParams } from '../lib';

export function createTodo(params: RouteParams | null, store: DataStore): RequestHandler {
  return (req: HttpRequest<CreateTodoDto>) => {

    const title = req.body?.title;

    if (!title) {
      throw new HttpErrorResponse({
        error: 'Missing title',
        status: 400,
        statusText: 'Bad Request',
      });
    }

    const todos = (store['todos'] ?? []) as Todo[];
    const existing = todos.find(t => t.title === title);
    if (existing) {
      throw new HttpErrorResponse({
        error: `Todo with title "${title}" already exists`,
        status: 409,
        statusText: 'Conflict',
      });
    }

    const id = getRandomLowerCaseLetters(5);
    const todo: Todo = { id, title, isDone: false };
    store['todos'] = [todo, ...todos];

    return of(new HttpResponse<Todo>({
      body: todo,
    }));
  }
}
