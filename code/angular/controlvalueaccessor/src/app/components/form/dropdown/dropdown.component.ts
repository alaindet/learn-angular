import { Component, Input, ChangeDetectionStrategy, OnInit, HostListener, ElementRef, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Form } from '@angular/forms';

interface FormSelectOption {
  value: string | number;
  label: string;
}

@Component({
  selector: 'app-form-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormDropdownComponent),
      multi: true
    }
  ]
})
export class FormDropdownComponent implements OnInit, ControlValueAccessor {

  @Input() id: string;
  @Input() disabled = false;
  @Input() current: string | number; // The current value, not the current label
  @Input() options: FormSelectOption[] = [];
  @Input() defaultOption: FormSelectOption = { value: '', label: 'Choose..' };
  @Input() hasMargin = false;

  @Output() chooseOption = new EventEmitter<FormSelectOption>();

  public onChange: (value: string) => {};
  public onTouched: () => {};
  public isOpen = false;
  public currentValue: string | number;
  public currentLabel: string;

  constructor(
    private element: ElementRef,
  ) {}

  public ngOnInit(): void {
    if (!this.current) {
      this.updateCurrentOption(this.defaultOption);
    } else {
      this.updateCurrentOption(this.getOptionByValue(this.current));
    }
  }

  public onOptionsToggle(): void {
    if (this.disabled) {
      return;
    }
    this.isOpen = !this.isOpen;
  }

  public onSelectOption(option: FormSelectOption): void {
    this.onTouched();
    this.updateCurrentOption(option);
    this.isOpen = false;
    this.chooseOption.emit(option);
  }

  private updateCurrentOption(option: FormSelectOption): void {
    this.currentValue = option.value;
    this.currentLabel = option.label;
    if (this.onChange) {
      this.onChange('' + this.currentValue);
    }
  }

  private getOptionByValue(value: string | number): FormSelectOption {
    value = '' + value;
    const option = this.options.find(anOption => value === anOption.value);
    return option ? option : this.defaultOption;
  }

  // Close dropdown when clicking away
  @HostListener('document:click', ['$event.target'])
  public onMouseLeave(targetElement: any): void {
    if (!this.isOpen) {
      return;
    }
    if (!this.element.nativeElement.contains(targetElement)) {
      this.isOpen = false;
    }
  }

  writeValue(value: string): void {
    const option = this.getOptionByValue(value);
    this.updateCurrentOption(option);
  }

  registerOnChange(fn: (value: string) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
