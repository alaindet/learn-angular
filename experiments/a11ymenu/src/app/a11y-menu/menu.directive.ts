import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { A11yMenuService } from './a11y-menu.service';

@Directive({
  selector: '[appMenu]',
  host: {
    role: 'menu',
  },
})
export class A11yMenuDirective implements OnInit {

  @Input('appMenu')
  @HostBinding('attr.id') id!: string;

  @HostBinding('attr.aria-labelledby')
  handledBy?: string;

  @HostBinding('style.display')
  cssDisplay = 'none';

  constructor(
    private svc: A11yMenuService,
  ) {}

  ngOnInit() {
    this.svc.open$
      .pipe(takeUntil(this.svc.destroy$))
      .subscribe(isOpen => this.cssDisplay = isOpen ? 'block' : 'none');
  }
}
