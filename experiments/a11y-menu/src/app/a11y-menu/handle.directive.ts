import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { delay, filter } from 'rxjs/operators';

import { A11yMenuService } from './services';
import { FOCUS_HANDLE, KeyboardKey } from './types';

@Directive({
  selector: '[a11yMenuHandle]',
  host: {
    'aria-haspopup': 'menu',
  },
})
export class A11yMenuHandleDirective implements OnInit {

  @Input('a11MenuHandle')
  @HostBinding('attr.id')
  id!: string

  @HostBinding('attr.aria-expanded')
  @HostBinding('attr.aria-pressed')
  isOpen!: string;

  @HostBinding('attr.aria-controls')
  ariaControls!: string;

  constructor(
    private host: ElementRef,
    private svc: A11yMenuService,
  ) {}

  ngOnInit() {
    this.listenToOpen();
    this.listenToFocus();
    this.listenToHostEvents();
  }

  private listenToOpen(): void {
    this.svc.open$
      .subscribe(isOpen => this.isOpen = isOpen ? 'true' : 'false');
  }

  // Unfortunately, delay(0) is needed to push the execution at the end of the stack
  // So that the focus event on the handle is the last thing that executes
  // It is equivalent to setTimeout()
  private listenToFocus(): void {
    this.svc.focus$
      .pipe(filter(focus => focus === FOCUS_HANDLE), delay(0))
      .subscribe(() => this.host.nativeElement.focus());
  }

  private listenToHostEvents(): void {
    fromEvent<MouseEvent>(this.host.nativeElement, 'click')
      .subscribe(e => this.onClick(e));

    fromEvent<KeyboardEvent>(this.host.nativeElement, 'keydown')
      .subscribe(e => this.onKeydown(e));
  }

  private onClick(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();

    if (this.isOpen === 'true') {
      this.svc.closeMenu();
      return;
    }

    this.svc.openMenu();
    this.svc.focusFirstItem();
  }

  private onKeydown(event: KeyboardEvent): void {
    let shouldPrevent = false;

    switch (event.key) {
      case KeyboardKey.Space:
      case KeyboardKey.Enter:
      case KeyboardKey.ArrowDown:
      case KeyboardKey.Down:
        this.svc.openMenu();
        this.svc.focusFirstItem();
        shouldPrevent = true;
        break;

      case KeyboardKey.Esc:
      case KeyboardKey.Escape:
        this.svc.closeMenu();
        this.svc.focusHandle();
        shouldPrevent = true;
        break;

      case KeyboardKey.Up:
      case KeyboardKey.ArrowUp:
        this.svc.openMenu();
        this.svc.focusLastItem();
        shouldPrevent = true;
        break;

      default:
        break;
    }

    if (shouldPrevent) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
}
