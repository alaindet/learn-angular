import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, inject, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';

import { didInputChange } from '../shared/functions';
import { Todo } from './types';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  template: `
    <form [formGroup]="theForm" (ngSubmit)="onSubmit()">

      <!-- ?ID -->
      <ng-container *ngIf="selectedTodo?.id as theId">
        <strong>Selected item:</strong>
        <span>{{ theId }}</span>
      </ng-container>

      <!-- Title -->
      <div class="form-control">
        <label for="todo-title">
          Title *
        </label>
        <input
          #inputTitleRef
          type="text"
          id="todo-title"
          formControlName="title"
          placeholder="What to do?"
        >
        <p *ngIf="fTitle.dirty && fTitle.invalid" class="error-message">
          Enter a valid title
        </p>
      </div>

      <!-- Submit -->
      <div class="form-control">
        <button type="submit" [disabled]="theForm.invalid">
          {{ !!selectedTodo ? 'Edit' : 'Save' }}
        </button>
      </div>

    </form>
  `,
  styles: [`
    :host {
      display: inline-block;
      border: 2px solid #ccc;
      border-radius: 0.25rem;
      padding: 1rem;
    }

    .error-message {
      font-size: 0.85rem;
      font-style: italic;
      color: red;
    }
  `],
})
export class TodoFormComponent {

  @Input() selectedTodo: Todo | null = null;

  @Output() savedTodo = new EventEmitter<{ title: Todo['title'] }>();

  @ViewChild('inputTitleRef', { static: true })
  inputTitleRef!: ElementRef;

  formBuilder = inject(FormBuilder);

  theForm = this.formBuilder.nonNullable.group({
    title: ['', Validators.required],
  });

  get fTitle(): FormControl {
    return this.theForm.get('title')! as FormControl;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (didInputChange(changes['selectedTodo'])) {
      const title = this.selectedTodo?.title ?? '';
      this.theForm.patchValue({ title });
    }
  }

  onSubmit() {
    if (this.theForm.invalid) {
      return;
    }

    const title = this.theForm.value.title!;
    this.savedTodo.emit({ title });
    this.theForm.reset();
    this.inputTitleRef?.nativeElement?.focus();
  }
}
