import { Directive, EventEmitter, HostBinding, Input, Output, ContentChild, AfterContentInit, OnInit, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';

import { A11yMenuService } from './services';
import { A11yMenuFocusable } from './types';
import { A11yMenuHandleDirective } from './handle.directive';
import { A11yMenuDirective } from './menu.directive';

@Directive({
  selector: '[a11yMenuContainer]',
  exportAs: 'a11yMenuContainer',
  providers: [A11yMenuService],
})
export class A11yMenuContainerDirective implements OnInit, AfterContentInit, OnDestroy {

  @Input('a11yMenuContainer')
  @HostBinding('attr.id')
  id!: string;

  @Input() cssFocused?: string;

  @Output() confirmed = new EventEmitter<A11yMenuFocusable>();
  @Output() canceled = new EventEmitter<void>();

  @ContentChild(A11yMenuHandleDirective)
  handleRef!: A11yMenuHandleDirective;

  @ContentChild(A11yMenuDirective)
  menuRef!: A11yMenuDirective;

  open = false;

  private onClickOutRef!: (e: MouseEvent) => void;

  constructor(
    private host: ElementRef,
    private renderer: Renderer2,
    private svc: A11yMenuService,
  ) {}

  ngOnInit() {
    this.listenToState();
    this.listenToCustomEvents();
    this.listenToNativeEvents();
    this.listenToClickOut();
  }

  ngAfterContentInit() {
    this.handleRef.ariaControls = this.menuRef.id;
    this.menuRef.ariaLabelledBy = this.handleRef.id;
  }

  ngOnDestroy() {
    window.removeEventListener('mousedown', this.onClickOutRef);
  }

  private listenToCustomEvents(): void {
    this.svc.confirmed$.subscribe(confirmed => this.confirmed.emit(confirmed));
    this.svc.canceled$.subscribe(() => this.canceled.emit());
  }

  private listenToState(): void {
    this.svc.open$.subscribe(open => this.open = open);
    const host = this.host.nativeElement;
    const cssClass = this.cssFocused as string;
    this.svc.isMenuActive$.subscribe(active => {
      active
        ? this.renderer.addClass(host, cssClass)
        : this.renderer.removeClass(host, cssClass);
    });
  }

  private listenToNativeEvents(): void {
    const host = this.host.nativeElement;
    fromEvent(host, 'focusin').subscribe(() => this.svc.activateMenu());
    fromEvent(host, 'focusout').subscribe(() => this.svc.deactivateMenu());
  }

  private listenToClickOut(): void {
    this.onClickOutRef = this.onClickOut.bind(this);
    window.addEventListener('mousedown', this.onClickOutRef, true);
  }

  private onClickOut(event: any): void {
    if (this.host.nativeElement.contains(event.target)) return;
    if (!this.open) return;
    this.svc.closeMenu();
    this.svc.focusHandle();
  }
}
