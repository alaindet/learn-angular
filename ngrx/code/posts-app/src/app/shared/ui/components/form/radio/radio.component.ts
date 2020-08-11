import { Component, ChangeDetectionStrategy, Input, OnChanges, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { toBoolean } from './../../../functions/to-boolean.function';
import { UiFormRadio } from './radio.interface';

@Component({
  selector: 'ui-form-radio',
  styleUrls: ['./radio.component.scss'],
  templateUrl: './radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => UiFormRadioComponent),
    }
  ],
})
export class UiFormRadioComponent implements UiFormRadio, OnChanges, ControlValueAccessor {

  @ViewChild('inputRef', { static: true }) inputRef: ElementRef;

  @Input() shape: UiFormRadio['shape'] = 'round';
  @Input() size: UiFormRadio['size'] = 'small';
  @Input() color: UiFormRadio['color'] = 'primary';
  @Input() inline: UiFormRadio['inline'] = false;

  private onChange: (value: boolean) => void;

  ngOnChanges() {
    this.inline = toBoolean(this.inline);
  }

  onInputChange(value: boolean) {
    if (this.onChange) {
      this.onChange(value);
    }
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
