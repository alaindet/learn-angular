import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { PageStatus, PAGE_STATUS, Todo } from './types';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Todos</h1>

    <app-todos-form></app-todos-form>

    <app-todos-list
      [todos]="todos$ | async"
      (completeTodo)="onCompleteTodo($event)"
      (undoTodo)="onUndoTodo($event)"
    ></app-todos-list>
  `,
})
export class TodosComponent implements OnDestroy {

  private _pageStatus = new BehaviorSubject<PageStatus>(PAGE_STATUS.PRISTINE);
  pageStatus$ = this._pageStatus.asObservable();

  private _todos = new BehaviorSubject<Todo[]>([]);
  todos$ = this._todos.asObservable();

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
