import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Todo } from './types';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        <label>

          <!-- Checkbox -->
          <input
            type="checkbox"
            [checked]="todo.isDone"
            (change)="onCheck(todo.id, $event)"
          >

          <!-- Content -->
          #{{ todo.id }} - {{ todo.title }}

          <!-- Edit -->
          <button
            type="button"
            title="Edit item #{{ todo.id }}"
            (click)="onEdit(todo.id)"
          >
            Edit
          </button>

          <!-- Remove -->
          <button
            type="button"
            title="Remove item #{{ todo.id }}"
            (click)="onRemove(todo.id)"
          >
            Remove
          </button>
        </label>
      </li>
    </ul>
  `,
})
export class TodosListComponent {

  @Input() todos: Todo[] = [];

  @Output() checked = new EventEmitter<[Todo['id'], Todo['isDone']]>();
  @Output() edited = new EventEmitter<Todo['id']>();
  @Output() removed = new EventEmitter<Todo['id']>();

  onCheck(id: Todo['id'], event: Event) {
    const el = event.target as HTMLInputElement;
    this.checked.emit([id, el.checked]);
  }

  onEdit(id: Todo['id'],) {
    this.edited.emit(id);
  }

  onRemove(id: Todo['id'],) {
    this.removed.emit(id);
  }
}
