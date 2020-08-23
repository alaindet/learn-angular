import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, forwardRef, ElementRef, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { toBoolean } from './../../../functions/to-boolean.function';
import { UiFormRadio, UiFormRadioEvents } from './radio.interface';

@Component({
  selector: 'ui-form-radio',
  styleUrls: ['./radio.component.scss'],
  templateUrl: './radio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => UiFormRadioComponent),
  }],
})
export class UiFormRadioComponent implements UiFormRadio, OnChanges, ControlValueAccessor {

  @Input() options: UiFormRadio['options'] = [];
  @Input() size: UiFormRadio['size'] = 'medium';
  @Input() color: UiFormRadio['color'] = 'primary';
  @Input() shape: UiFormRadio['shape'] = 'round';
  @Input() name: UiFormRadio['name'] = 'ui-form-radio';
  @Input() spacing: UiFormRadio['spacing'] = 'medium';
  @Input() inline: UiFormRadio['inline'] = false;

  @Output() selected = new EventEmitter<UiFormRadioEvents['selected']>();

  value: string;
  private onChange: Function;
  private onTouched: Function;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnChanges() {
    this.inline = toBoolean(this.inline);
    this.setClassesOnHost();
  }

  onInputChange(event: any) {
    this.value = event.target.value;

    // Inside a form
    if (this.onChange && this.onTouched) {
      this.onChange(this.value);
      this.onTouched(this.value);
    }

    // Standalone
    else {
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

  private setClassesOnHost() {

    const classNames = [
      this.inline ? 'inline' : null,
    ];

    for (const className of classNames) {
      if (className) {
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }
}
