import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { toBoolean } from './../../../functions/to-boolean.function';
import { UiFormRadio, UiFormRadioEvents } from './radio.interface';

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

  @Input() options: UiFormRadio['options'];
  @Input() size: UiFormRadio['size'];
  @Input() color: UiFormRadio['color'];
  @Input() shape: UiFormRadio['shape'];
  @Input() inline: UiFormRadio['inline'];

  @Output() selected = new EventEmitter<UiFormRadioEvents['selected']>();

  value: string;
  private onChange: Function;
  private onTouched: Function;

  ngOnChanges() {
    this.inline = toBoolean(this.inline);
  }

  onInputChange(event: any) {
    this.value = event.target.value;

    if (this.onChange && this.onTouched) {
      this.onChange(this.value);
      this.onTouched(this.value);
    } else {
      this.selected.emit(this.value);
    }
  }

  // From ControlValueAccessor
  writeValue(value: string) {
    this.value = value;
  }

  // From ControlValueAccessor
  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  // From ControlValueAccessor
  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }
}
