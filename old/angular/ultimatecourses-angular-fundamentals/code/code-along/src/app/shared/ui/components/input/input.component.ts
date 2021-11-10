import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-input',
  template: `
    <input
      [type]="type"
      [value]="value"
      (input)="onInput($event.target.value)"
      [autofocus]="autofocus"
      [placeholder]="placeholder"
    >
  `,
  styles: [`
    input {
      padding: .33rem .66rem;
      font-size: 1.2rem;
      border-radius: .33rem;
      border: 1px solid #aaa;
    }
    input:focus {
      outline: none;
      border-color: #a0a0ff;
      box-shadow: inset 0 0 5px 0 #00a0ff;
    }
  `]
})
export class InputComponent {

  @Input() type = 'text';
  @Input() value = '';
  @Input() placeholder = '';
  @Input() autofocus = false;
  @Output() inputing = new EventEmitter<string>();

  public onInput(value: string): void {
    this.inputing.emit(value);
  }

}
