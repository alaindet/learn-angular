import { Component } from '@angular/core';

// This is a cross-entry-point dependency
import { TranslatePipe } from '@mycomp/ui-sdk/i18n';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [TranslatePipe],
  template: `<ng-content></ng-content>`,
  styles: [`
    :host {
      display: block;
      border: 1px solid red;
    }
  `],
})
export class ButtonComponent {
  // ...
}
