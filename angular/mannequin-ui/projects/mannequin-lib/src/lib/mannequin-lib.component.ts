import { Component } from '@angular/core';

@Component({
  selector: 'mq-mannequin-lib',
  styles: [`
    :host {
      padding: 1rem;
      margin: 1rem;
      border: 1px dashed red;
    }
  `],
  template: `
    <ng-content></ng-content>
  `,
})
export class MannequinLibComponent {}
