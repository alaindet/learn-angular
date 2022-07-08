import { Directive, HostBinding, Input } from '@angular/core';

import { A11yMenuService } from './services';

@Directive({
  selector: '[a11yMenu]',
  host: {
    role: 'menu',
    tabindex: '0',
  },
})
export class A11yMenuDirective {

  @Input('a11yMenu')
  @HostBinding('attr.id')
  id!: string

  @HostBinding('attr.aria-activedescendant')
  ariaActiveDescendant = '';

  @HostBinding('attr.aria-labelledby')
  ariaLabelledBy!: string;
}
