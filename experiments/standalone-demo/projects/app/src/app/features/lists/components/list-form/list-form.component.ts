import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { EditListDTO, List } from '../../../types';

@Component({
  selector: 'app-list-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h1>Create a list</h1>
    <form [formGroup]="theForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="field-name">Name</label>
        <input #firstRef type="text" formControlName="name" id="field-name">
      </div>
      <div>
        <button type="submit">
          {{ list !== null ? 'Edit' : 'Create' }}
        </button>
      </div>
    </form>
  `,
})
export class ListFormComponent implements OnChanges {
  @Input() list!: List | null;
  @Output() confirmed = new EventEmitter<EditListDTO>();

  @ViewChild('firstRef', { static: true })
  firstRef!: ElementRef<HTMLInputElement>;

  theForm!: FormGroup;

  ngOnChanges() {
    if (!this.theForm) {
      this.createForm();
    } else {
      this.updateForm();
    }
  }

  // Public API
  clearAndFocus() {
    this.theForm.patchValue({
      name: '',
    });
    this.firstRef.nativeElement.focus();
  }

  onSubmit() {
    if (this.theForm.invalid) {
      alert('List form is invalid');
      return;
    }

    const formVal = this.theForm.value as EditListDTO;
    this.confirmed.emit(formVal);
  }

  private createForm(): void {
    this.theForm = new FormGroup({
      name: new FormControl(
        this.list?.name ?? null,
        [Validators.required],
      ),
    });
  }

  private updateForm(): void {
    this.theForm.patchValue({
      name: this.list?.name ?? null,
    });
  }
}
