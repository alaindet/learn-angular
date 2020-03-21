import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  styleUrls: ['./input.component.scss'],
  template: `
    <input
      [type]="type"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [value]="value"
      (change)="onChange($event.target.value)"
      (blur)="onTouched()"
    >
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true
    }
  ]
})
export class FormInputComponent implements ControlValueAccessor {

  @Input() placeholder = '';
  @Input() type: 'text' | 'number' = 'text';
  @Input() disabled = false;

  public value = '';
  public onChange: (value: string) => {};
  public onTouched: () => {};

  /**
   * From ControlValueAccessor
   * From Angular to Component
   *
   * Angular uses this function to tell this component to update the value
   */
  writeValue(value: string): void {
    this.value = value;
  }

  /**
   * From ControlValueAccessor
   * From Component to Angular
   *
   * Angular gives the component a function so that the component can use it to
   * inform Angular when the input value changes
   */
  registerOnChange(fn: (value: string) => {}): void {
    this.onChange = fn;
  }

  /**
   * From ControlValueAccessor
   * From Component to Angular
   *
   * Angular gives the component a function so that the component can use it to
   * inform Angular when the input has been 'touched' (as in the form state)
   */
  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  /**
   * From ControlValueAccessor
   * From Angular to Component
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
