import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { QUERY_STATUS, QueryStatus } from '../shared/types';
import { Todo } from './types';
import { TodosService } from './todos.service';
import { TodoFormComponent } from './todo-form.component';
import { TodosListComponent } from './todos-list.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TodoFormComponent,
    TodosListComponent,
  ],
  providers: [TodosService],
  template: `
    <h1>Todos</h1>

    <ng-container *ngIf="loaded$ | async; else loadingTemplate">
      <ng-container *ngIf="success$ | async; else errorTemplate">
        
        <app-todo-form
          [selectedTodo]="selectedTodo"
          (savedTodo)="onSaveTodo($event)"
        ></app-todo-form>

        <app-todos-list
          [todos]="(todos$ | async) ?? []"
          (checked)="onCheck($event)"
          (edited)="onEdit($event)"
          (removed)="onRemove($event)"
        ></app-todos-list>

      </ng-container>
    </ng-container>

    <ng-template #loadingTemplate>
      <p>Loading todos...</p>
    </ng-template>

    <ng-template #errorTemplate>
      <p>Error while fetching todos, try again.</p>
    </ng-template>
  `,
})
export class TodosComponent implements OnInit, OnDestroy {

  private svc = inject(TodosService);

  private _pageStatus = new BehaviorSubject<QueryStatus>(QUERY_STATUS.PRISTINE);
  pageStatus$ = this._pageStatus.asObservable();
  loaded$ = this.pageStatus$.pipe(map(status => (
    status !== QUERY_STATUS.PRISTINE &&
    status !== QUERY_STATUS.LOADING
  )));
  success$ = this.pageStatus$.pipe(map(status => status === QUERY_STATUS.SUCCESS));

  selectedTodo: Todo | null = null;

  private _todos = new BehaviorSubject<Todo[]>([]);
  todos$ = this._todos.asObservable();

  ngOnInit() {
    this.fetchTodos();
  }

  ngOnDestroy() {
    this._pageStatus.complete();
    this._todos.complete();
  }

  onSaveTodo(payload: { title: Todo['title'] }) {

    // Creating?
    let req!: Observable<Todo>;

    // Updating?
    if (this.selectedTodo) {
      const { title } = payload;
      const newTodo = { ...this.selectedTodo, title };
      req = this.svc.update(newTodo);
    }

    else {
      req = this.svc.create(payload);
    }

    this.runHttpRequest(req, () => {
      this.selectedTodo = null;
      this.fetchTodos();
    });
  }

  onCheck([id, isDone]: [Todo['id'], Todo['isDone']]) {
    const req = this.svc.update({ id, isDone });
    this.runHttpRequest(req, () => this.fetchTodos());
  }

  onEdit(id: Todo['id']) {
    const todos = this._todos.getValue();
    this.selectedTodo = todos.find(t => t.id === id) ?? null;
  }

  onRemove(id: Todo['id']) {
    const req = this.svc.delete(id);
    this.runHttpRequest(req, () => this.fetchTodos());
  }

  private fetchTodos(): void {
    this.runHttpRequest(
      this.svc.getAll(),
      todos => this._todos.next(todos),
    );
  }

  private runHttpRequest<T>(
    req: Observable<T>,
    onSuccess?: (data: T) => void,
    onError?: (err: any) => void,
  ): void {
    this._pageStatus.next(QUERY_STATUS.LOADING);
    req.subscribe({
      next: data => {
        this._pageStatus.next(QUERY_STATUS.SUCCESS);
        if (onSuccess) onSuccess(data);
      },
      error: err => {
        this._pageStatus.next(QUERY_STATUS.ERROR);
        console.error(err);
        if (onError) onError(err);
      },
    });
  } 
}
