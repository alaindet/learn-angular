import { Directive, EventEmitter, Input, Output } from '@angular/core';

import { A11yMenuService } from './services/a11y-menu.service';

@Directive({
  selector: '[a11yMenuContainer]',
  providers: [A11yMenuService],
})
export class A11yMenuContainerDirective {

  @Input('a11yMenuContainer') id!: string;

  @Output() confirmed = new EventEmitter<string>();
  @Output() canceled = new EventEmitter<void>();

  constructor(
    private svc: A11yMenuService,
  ) {}
}
