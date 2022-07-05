import { Directive } from '@angular/core';

@Directive({
  selector: '[appMenuItemContainer]',
  host: {
    role: 'none',
  },
})
export class A11yMenuItemContainerDirective {

}
