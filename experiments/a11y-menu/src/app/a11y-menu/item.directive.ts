import { Directive, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { A11yMenuService } from './services';
import { FOCUS_CONFIRM, FOCUS_DISMISS, FOCUS_HANDLE, KeyboardKey } from './types';
import { isPrintableCharacter } from './utils';

@Directive({
  selector: '[a11yMenuItem]',
  host: {
    role: 'menuitem',
  },
})
export class A11yMenuItemDirective implements OnInit {

  @Input('a11yMenuItem')
  @HostBinding('attr.id')
  id!: string;

  @Input() cssActive?: string;

  @Output() confirmed = new EventEmitter<string>();

  @HostBinding('attr.aria-activedescendant')
  ariaActiveDescendant = '';

  @HostBinding('attr.aria-labelledby')
  ariaLabelledBy!: string;

  @HostBinding('attr.tabIndex')
  tabIndex = '-1';

  constructor(
    private host: ElementRef,
    private renderer: Renderer2,
    private svc: A11yMenuService,
  ) {}

  ngOnInit() {
    this.listenToFocus();
    this.listenToEvents();
    this.listenToNativeEvents();
    this.svc.addItem(this.id);
  }

  private listenToFocus(): void {
    this.svc.focus$
      .pipe(filter(focus => (
        focus !== null &&
        focus !== FOCUS_HANDLE &&
        focus !== FOCUS_DISMISS &&
        focus !== FOCUS_CONFIRM
      )))
      .subscribe(focused => focused === this.id ? this.onFocus() : this.onBlur());
  }

  private listenToEvents(): void {
    this.svc.confirmed$.subscribe(() => this.confirmed.emit());
  }

  private onFocus(): void {
    const host = this.host.nativeElement;
    host.focus();
    if (this.cssActive) {
      this.renderer.addClass(host, this.cssActive);
    }
  }

  private onBlur(): void {
    const host = this.host.nativeElement;
    host.blur();
    if (this.cssActive) {
      this.renderer.removeClass(host, this.cssActive);
    }
  }

  private listenToNativeEvents(): void {
    this.on<MouseEvent>('mouseover').subscribe(this.onMouseOver.bind(this));
    this.on<MouseEvent>('click').subscribe(this.onClick.bind(this));
    this.on<KeyboardEvent>('keydown').subscribe(this.onKeydown.bind(this));
  }

  private on<T = any>(eventName: string): Observable<T> {
    return fromEvent<T>(this.host.nativeElement, eventName)
      .pipe(takeUntil(this.svc.destroy$));
  }

  private onMouseOver(event: MouseEvent): void {
    const target = (event?.currentTarget as HTMLElement);
    target?.focus();
  }

  private onClick(_: MouseEvent): void {
    this.svc.confirmItem(this.id);
    this.svc.closeMenu();
    this.svc.focusHandle();
  }

  private onKeydown(event: KeyboardEvent): void {
    let eventCaptured = false;

    // Skip some modifiers
    if (event.ctrlKey || event.altKey || event.metaKey) {
      return;
    }

    switch (event.key) {
      case KeyboardKey.Space:
      case KeyboardKey.Enter:
        this.svc.confirmItem(this.id);
        this.svc.closeMenu();
        this.svc.focusHandle();
        eventCaptured = true;
        break;

      case KeyboardKey.Esc:
      case KeyboardKey.Escape:
        this.svc.cancel();
        this.svc.closeMenu();
        this.svc.focusHandle();
        eventCaptured = true;
        break;

      case KeyboardKey.Up:
      case KeyboardKey.ArrowUp:
      case KeyboardKey.Left:
      case KeyboardKey.ArrowLeft:
        this.svc.focusPreviousItem();
        eventCaptured = true;
        break;

      case KeyboardKey.Down:
      case KeyboardKey.ArrowDown:
      case KeyboardKey.Right:
      case KeyboardKey.ArrowRight:
        this.svc.focusNextItem();
        eventCaptured = true;
        break;

      case KeyboardKey.Home:
      case KeyboardKey.PageUp:
        this.svc.focusFirstItem();
        eventCaptured = true;
        break;

      case KeyboardKey.End:
      case KeyboardKey.PageDown:
        this.svc.focusLastItem();
        eventCaptured = true;
        break;

      case KeyboardKey.Tab:
        this.svc.closeMenu();
        break;

      // Search by first letter
      default:
        if (!isPrintableCharacter(event.key)) break;
        this.svc.focusItemBySearch(event.key as KeyboardKey);
        eventCaptured = true;
        break;
    }

    if (eventCaptured) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
}
