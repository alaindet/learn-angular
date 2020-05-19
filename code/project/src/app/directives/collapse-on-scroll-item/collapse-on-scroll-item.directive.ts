import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

import { OnScrollDown } from './on-scroll-down.enum';

@Directive({
  selector: '[collapseOnScrollItem]'
})
export class CollapseOnScrollItemDirective {

  @Input() onScrollDown: OnScrollDown = OnScrollDown.Collapse;

  collapsed = false;
  initialHeight: string;

  private defaultStyle = {
    'transition': 'opacity 0.2s linear',
    'opacity': '1',
  };

  private collapsedStyle = {
    'overflow': 'hidden',
    'margin': '0',
    'width': '0',
    'height': '0',
    'opacity': '0',
  };

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.setStyle(this.defaultStyle);

    // Initially collapse "inverted" items
    if (this.onScrollDown === OnScrollDown.Expand) {
      this.collapse();
    }
  }

  setHeight() {
    const el = this.element.nativeElement;
    this.initialHeight = `${el.offsetHeight}px`;
    this.renderer.setStyle(el, 'height', this.initialHeight);
  }

  toggleCollapsable() {
    this.collapsed ? this.expand() : this.collapse();
  }

  private collapse() {
    this.collapsed = true;
    this.renderer.removeStyle(this.element.nativeElement, 'height');
    this.setStyle(this.collapsedStyle);
  }

  private expand() {
    this.collapsed = false;
    for (const rule of Object.keys(this.collapsedStyle)) {
      this.renderer.removeStyle(this.element.nativeElement, rule);
    }
  }

  private setStyle(style: { [klass: string]: any }) {
    for (const [rule, value] of Object.entries(style)) {
      this.renderer.setStyle(this.element.nativeElement, rule, value);
    }
  }
}
