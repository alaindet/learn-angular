import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[a11yMenuItem]',
  host: {
    role: 'menuitem',
  },
})
export class A11yMenuItemDirective {

  @Input('a11yMenu')
  @HostBinding('attr.id')
  id!: string

  @HostBinding('attr.aria-activedescendant')
  ariaActiveDescendant = '';

  @HostBinding('attr.aria-labelledby')
  ariaLabelledBy!: string;
}
