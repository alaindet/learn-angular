import { Directive, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { A11yMenuService } from './a11y-menu.service';
import { FOCUSED_HANDLE } from './focus';
import { KeyboardKey } from './key';

@Directive({
  selector: '[appMenuItem]',
  host: {
    role: 'menuitem',
  },
})
export class A11yMenuItemDirective implements OnInit {

  @Input('appMenuItem') id!: string;

  @Output() confirmed = new EventEmitter<string>();

  @HostBinding('attr.tabIndex')
  tabIndex = '-1';

  constructor(
    private host: ElementRef,
    private svc: A11yMenuService,
  ) {}

  ngOnInit() {
    this.listenToFocusEvents();
    this.initEventHandlers();
    this.svc.addItem(this.id);
  }

  private listenToFocusEvents(): void {
    this.svc.focused$
      .pipe(
        takeUntil(this.svc.destroy$),
        filter(focused => focused !== null && focused !== FOCUSED_HANDLE),
      )
      .subscribe(focused => {

        // Focus?
        if (focused === this.id) {
          this.tabIndex = '0';
          this.host.nativeElement.focus();
          return;
        }

        // Blur?
        this.tabIndex = '-1';
      });
  }

  private initEventHandlers(): void {
    fromEvent<MouseEvent>(this.host.nativeElement, 'mouseover')
      .pipe(takeUntil(this.svc.destroy$))
      .subscribe(e => (e?.currentTarget as HTMLElement)?.focus());

    fromEvent<MouseEvent>(this.host.nativeElement, 'click')
      .pipe(takeUntil(this.svc.destroy$))
      .subscribe(() => this.onClick());

    fromEvent<KeyboardEvent>(this.host.nativeElement, 'keydown')
      .pipe(takeUntil(this.svc.destroy$))
      .subscribe(e => this.onKeydown(e));
  }

  private onClick(): void {
    this.confirmed.emit(this.id);
    this.svc.closeMenu();
    this.svc.focusHandle();
  }

  private onKeydown(event: KeyboardEvent): void {
    let shouldStop = false;

    // Skip some modifiers
    if (event.ctrlKey || event.altKey || event.metaKey) {
      return;
    }

    switch (event.key) {
      case KeyboardKey.Space:
      case KeyboardKey.Enter:
        this.confirmed.emit(this.id);
        this.svc.closeMenu();
        this.svc.focusHandle();
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
      case KeyboardKey.Left:
      case KeyboardKey.ArrowLeft:
        this.svc.focusPreviousItem();
        shouldStop = true;
        break;

      case KeyboardKey.Down:
      case KeyboardKey.ArrowDown:
      case KeyboardKey.Right:
      case KeyboardKey.ArrowRight:
        this.svc.focusNextItem();
        shouldStop = true;
        break;

      case KeyboardKey.Home:
      case KeyboardKey.PageUp:
        this.svc.focusFirstItem();
        shouldStop = true;
        break;

      case KeyboardKey.End:
      case KeyboardKey.PageDown:
        this.svc.focusLastItem();
        shouldStop = true;
        break;

      case KeyboardKey.Tab:
        this.svc.closeMenu();
        break;

      // Search by first letter
      default:
        if (this.isPrintableCharacter(event.key)) {
          this.svc.focusBySearch(event.key);
          shouldStop = true;
        }
        break;
    }

    if (shouldStop) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  private isPrintableCharacter(char: string): boolean {
    return char.length === 1 && !!char.match(/\S/);
  }
}
