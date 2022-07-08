import { Directive } from '@angular/core';

@Directive({
  selector: '[a11yPresentation]',
  host: {
    role: 'presentation',
  },
})
export class A11yPresentationDirective {}
