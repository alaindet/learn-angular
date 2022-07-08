import { Directive, EventEmitter, HostBinding, Input, Output, ContentChild, AfterContentInit, OnInit } from '@angular/core';

import { A11yMenuHandleDirective } from './handle.directive';
import { A11yMenuDirective } from './menu.directive';
import { A11yMenuService } from './services/a11y-menu.service';
import { A11yMenuFocusable } from './types';

@Directive({
  selector: '[a11yMenuContainer]',
  providers: [A11yMenuService],
})
export class A11yMenuContainerDirective implements OnInit, AfterContentInit {

  @Input('a11yMenuContainer')
  @HostBinding('attr.id')
  id!: string;

  @Output() confirmed = new EventEmitter<A11yMenuFocusable>();
  @Output() canceled = new EventEmitter<void>();

  @ContentChild(A11yMenuHandleDirective)
  handleRef!: A11yMenuHandleDirective;

  @ContentChild(A11yMenuDirective)
  menuRef!: A11yMenuDirective;

  constructor(
    private svc: A11yMenuService,
  ) {}

  ngOnInit() {
    this.svc.confirmed$.subscribe(confirmed => this.confirmed.emit(confirmed));
    this.svc.canceled$.subscribe(() => this.canceled.emit());
  }

  ngAfterContentInit() {
    this.handleRef.ariaControls = this.menuRef.id;
    this.menuRef.ariaLabelledBy = this.handleRef.id;
  }
}
