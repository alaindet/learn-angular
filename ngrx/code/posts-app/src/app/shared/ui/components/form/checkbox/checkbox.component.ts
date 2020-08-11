import { Component, ChangeDetectionStrategy, Input, OnChanges, ViewChild, ElementRef, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { toBoolean } from './../../../functions/to-boolean.function';
import { UiFormCheckbox, UiFormCheckboxEvents } from './checkbox.interface';

@Component({
  selector: 'ui-form-checkbox',
  styleUrls: ['./checkbox.component.scss'],
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => UiFormCheckboxComponent),
    }
  ],
})
export class UiFormCheckboxComponent implements UiFormCheckbox, OnChanges, ControlValueAccessor {

  @ViewChild('inputRef', { static: true }) inputRef: ElementRef;

  @Input() shape: UiFormCheckbox['shape'] = 'round';
  @Input() size: UiFormCheckbox['size'] = 'small';
  @Input() color: UiFormCheckbox['color'] = 'primary';
  @Input() inline: UiFormCheckbox['inline'] = false;

  @Output() changed = new EventEmitter<UiFormCheckboxEvents['changed']>();

  private onChange: (value: boolean) => void;

  ngOnChanges() {
    this.inline = toBoolean(this.inline);
  }

  onInputChange(value: boolean) {
    this.onChange
      ? this.onChange(value)
      : this.changed.emit(value);
  }

  // From ControlValueAccessor
  // Angular => component
  writeValue(value: boolean) {
    this.inputRef.nativeElement.checked = value;
  }

  // From ControlValueAccessor
  // Component => Angular
  registerOnChange(fn: (value: boolean) => void) {
    this.onChange = fn;
  }

  // From ControlValueAccessor
  registerOnTouched(fn: (value: boolean) => void) {
    // Do nothing
  }

  // From ControlValueAccessor
  setDisabledState(isDisabled: boolean) {
    // Do nothing
  }
}
