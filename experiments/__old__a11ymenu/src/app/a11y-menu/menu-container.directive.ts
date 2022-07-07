import { takeUntil } from 'rxjs/operators';
import { ContentChild, Directive, AfterContentInit, OnInit, ElementRef, HostBinding, OnDestroy } from '@angular/core';

import { A11yMenuHandleDirective } from './handle.directive';
import { A11yMenuDirective } from './menu.directive';
import { A11yMenuService } from './a11y-menu.service';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appMenuContainer]',
  providers: [A11yMenuService],
})
export class A11yMenuContainerDirective implements OnInit, AfterContentInit, OnDestroy {

  @HostBinding('class.focus')
  isFocused = false;

  @ContentChild(A11yMenuDirective)
  menuRef!: A11yMenuDirective;

  @ContentChild(A11yMenuHandleDirective)
  handleRef!: A11yMenuHandleDirective;

  private onClickOutRef!: (e: MouseEvent) => void;

  constructor(
    private host: ElementRef<HTMLElement>,
    private svc: A11yMenuService,
  ) {}

  ngOnInit() {
    fromEvent(this.host.nativeElement, 'focusin')
      .pipe(takeUntil(this.svc.destroy$))
      .subscribe(() => this.isFocused = true);

    fromEvent(this.host.nativeElement, 'focusout')
      .pipe(takeUntil(this.svc.destroy$))
      .subscribe(() => this.isFocused = false);

    this.onClickOutRef = this.onClickOut.bind(this);
    window.addEventListener('mousedown', this.onClickOutRef, true);
  }

  ngAfterContentInit() {
    this.menuRef.handledBy = this.handleRef.id;
    this.handleRef.controlsMenu = this.menuRef.id;
  }

  ngOnDestroy() {
    window.removeEventListener('mousedown', this.onClickOutRef);
  }

  private onClickOut(event: any): void {
    if (this.host.nativeElement.contains(event.target)) return;
    if (!this.svc.open) return;
    this.svc.closeMenu();
    this.handleRef.host.nativeElement.focus();
  }
}
