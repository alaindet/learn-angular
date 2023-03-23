import { HttpRequest, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

import { Todo } from 'src/app/todos/types';
import { DataStore, RequestHandler, RouteParams } from '../lib';

export function getAllTodos(params: RouteParams | null, store: DataStore): RequestHandler {
  return (req: HttpRequest<any>) => {
    return of(new HttpResponse<Todo>({
      body: store['todos'] ?? [],
    }));
  }
}
