import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { QUERY_STATUS, QueryStatus } from '../shared/types';
import { Todo } from './types';
import { TodosService } from './todos.service';
import { TodoFormComponent } from './todo-form.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TodoFormComponent,
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
    this._pageStatus.next(QUERY_STATUS.LOADING);
    this.svc.getAll().subscribe({
      error: () => this._pageStatus.next(QUERY_STATUS.ERROR),
      next: todos => this._todos.next(todos),
    });
  }

  private runHttpRequest<T>(
    req: Observable<T>,
    ok: (data: T) => void,
    ko: (err: any) => void,
  ): void {
    this._pageStatus.next(QUERY_STATUS.LOADING);
    req.subscribe({
      error: err => {
        this._pageStatus.next(QUERY_STATUS.ERROR);
        ko(err);
      },
      next: todos => {
        this._pageStatus.next(QUERY_STATUS.SUCCESS);
      },
    });
  } 

  onSaveTodo(payload: { title: Todo['title'] }) {

    // Update?
    if (this.selectedTodo) {
      const { title } = payload;
      this.svc.update({ ...this.selectedTodo, title });
      this.selectedTodo = null;
      return;
    }

    // Create?
    this.
  }

  onCompleteTodo(todoId: string) {
    this._todos.next(
      this._todos.getValue().map(todo => {
        return (todo.id === todoId)
          ? { ...todo, isDone: true }
          : todo;
        }
      )
    );
  }

  onUndoTodo(todoId: string) {
    this._todos.next(
      this._todos.getValue().map(todo => {
        return (todo.id === todoId)
          ? { ...todo, isDone: false }
          : todo;
        }
      )
    );
  }

  ngOnDestroy() {
    this._pageStatus.complete();
    this._todos.complete();
  }
}
