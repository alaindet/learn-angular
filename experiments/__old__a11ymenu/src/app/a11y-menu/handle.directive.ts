import { Directive, OnInit, Input, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { A11yMenuService } from './a11y-menu.service';
import { KeyboardKey } from './key';
import { FOCUSED_HANDLE } from './focus';

@Directive({
  selector: '[appMenuHandle]',
  host: {
    'aria-popup': 'true',
  },
})
export class A11yMenuHandleDirective implements OnInit {

  @Input('appMenuHandle') @HostBinding('attr.id') id!: string;

  @HostBinding('attr.aria-controls') controlsMenu!: string;

  constructor(
    public host: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private svc: A11yMenuService,
  ) {}

  ngOnInit() {
    this.toggleStyleOnOpen();
    this.listenToFocus();
    this.initEventHandlers();
  }

  private toggleStyleOnOpen(): void {
    this.svc.open$
      .pipe(takeUntil(this.svc.destroy$))
      .subscribe(isOpen => {
        const host = this.host.nativeElement;
        if (isOpen) {
          this.renderer.setAttribute(host, 'aria-expanded', 'true');
        } else {
          this.renderer.removeAttribute(host, 'aria-expanded');
          this.svc.focusHandle();
        }
      });
  }

  private listenToFocus(): void {
    this.svc.focused$
      .pipe(
        takeUntil(this.svc.destroy$),
        filter(focused => focused === FOCUSED_HANDLE),
      )
      .subscribe(() => this.host.nativeElement.focus());
  }

  private initEventHandlers(): void {
    fromEvent<MouseEvent>(this.host.nativeElement, 'click')
      .pipe(takeUntil(this.svc.destroy$))
      .subscribe(e => this.onClick(e));

    fromEvent<KeyboardEvent>(this.host.nativeElement, 'keydown')
      .pipe(takeUntil(this.svc.destroy$))
      .subscribe(e => this.onKeydown(e));
  }

  private onClick(event: MouseEvent): void {
    event.stopPropagation();
    event.preventDefault();

    if (this.svc.open) {
      this.svc.closeMenu();
      return;
    }

    this.svc.openMenu();
    this.svc.focusFirstItem();
  }

  private onKeydown(event: KeyboardEvent): void {
    let shouldStop = false;

    switch (event.key) {
      case KeyboardKey.Space:
      case KeyboardKey.Enter:
      case KeyboardKey.ArrowDown:
      case KeyboardKey.Down:
        this.svc.openMenu();
        this.svc.focusFirstItem();
        shouldStop = true;
        break;

      case KeyboardKey.Esc:
      case KeyboardKey.Escape:
        this.svc.closeMenu();
        this.svc.focusHandle();
        shouldStop = true;
        break;

      case KeyboardKey.Up:
      case KeyboardKey.ArrowUp:
        this.svc.openMenu();
        this.svc.focusLastItem();
        shouldStop = true;
        break;

      default:
        break;
    }
  }
}
