import { Directive, HostBinding, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

import { A11yMenuService } from './services';
import { FOCUS_DISMISS, FOCUS_HANDLE } from './types';

@Directive({
  selector: '[a11yMenu]',
  host: {
    role: 'menu',
  },
})
export class A11yMenuDirective implements OnInit {

  @Input('a11yMenu')
  @HostBinding('attr.id')
  id!: string

  @Input() cssOpen?: string;

  @HostBinding('attr.aria-activedescendant')
  ariaActiveDescendant = '';

  @HostBinding('attr.aria-labelledby')
  ariaLabelledBy!: string;

  @HostBinding('attr.tabindex')
  tabindex = '-1';

  constructor(
    private svc: A11yMenuService,
    private renderer: Renderer2,
    private host: ElementRef,
  ) {}

  ngOnInit() {
    this.listenToOpenState();
    this.listenToActiveItem();
  }

  private listenToOpenState(): void {
    const host = this.host.nativeElement;
    const cssOpen = this.cssOpen as string;

    this.svc.open$.subscribe(open => {
      if (open) {
        this.tabindex = '0';
        if (this.cssOpen) {
          this.renderer.addClass(host, cssOpen)
        }
        return;
      }

      this.tabindex = '-1';
      if (this.cssOpen) {
        this.renderer.removeClass(host, cssOpen);
      }
    });
  }

  private listenToActiveItem(): void {
    this.svc.focus$.subscribe(focused => {

      if (
        focused === null ||
        focused === FOCUS_HANDLE ||
        focused === FOCUS_DISMISS ||
        focused === FOCUS_DISMISS
      ) {
        this.ariaActiveDescendant = '';
        return;
      }

      this.ariaActiveDescendant = focused as string;
    });
  }
}
