import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CreateTodoDto, Todo, UpdateTodoDto } from './types';

@Injectable()
export class TodosService {

  private http = inject(HttpClient);

  create(dto: CreateTodoDto): Observable<Todo> {
    const url = `${environment.apiUrl}/todos`;
    return this.http.post<Todo>(url, dto);
  }

  getAll(): Observable<Todo[]> {
    const url = `${environment.apiUrl}/todos`;
    return this.http.get<Todo[]>(url);
  }

  get(id: Todo['id']): Observable<Todo> {
    const url = `${environment.apiUrl}/todos/${id}`;
    return this.http.get<Todo>(url);
  }

  update(dto: UpdateTodoDto): Observable<Todo> {
    const url = `${environment.apiUrl}/todos/${dto.id}`;
    return this.http.patch<Todo>(url, dto);
  }

  delete(id: Todo['id']): Observable<Todo> {
    const url = `${environment.apiUrl}/todos/${id}`;
    return this.http.delete<Todo>(url);
  }
}
