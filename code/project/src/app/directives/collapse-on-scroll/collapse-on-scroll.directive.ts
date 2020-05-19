import { Directive, QueryList, ElementRef, ContentChildren, Renderer2, Output, EventEmitter, HostListener } from '@angular/core';

import { OnScrollDown } from '../collapse-on-scroll-item/on-scroll-down.enum';
import { CollapseOnScrollItemDirective } from './../collapse-on-scroll-item/collapse-on-scroll-item.directive';

@Directive({
  selector: '[collapseOnScroll]'
})
export class CollapseOnScrollDirective {

  @ContentChildren(CollapseOnScrollItemDirective)
  private items: QueryList<CollapseOnScrollItemDirective>;

  @Output() collapsableHeight = new EventEmitter<number>();

  private THRESHOLD = 100;
  private SCROLLED_DOWN = false;

  constructor(
    private element: ElementRef,
  ) {}

  ngAfterViewInit() {
    this.initCollapsables();
    this.calculateHeight();
  }

  private initCollapsables() {
    for (const item of this.items) {
      item.setHeight();
    }
  }

  private triggerCollapsables() {
    for (const item of this.items) {
      item.toggleCollapsable();
    }
  }

  private calculateHeight() {
    const height = this.element.nativeElement.offsetHeight;
    this.collapsableHeight.emit(height);
  }

  private onScroll() {
    if (window.pageYOffset > this.THRESHOLD && !this.SCROLLED_DOWN) {
      this.SCROLLED_DOWN = true;
      this.triggerCollapsables();
      return;
    }
    if (window.pageYOffset < this.THRESHOLD && this.SCROLLED_DOWN) {
      this.SCROLLED_DOWN = false;
      this.triggerCollapsables();
      return;
    }
  }

  @HostListener('window:scroll')
  private scrollHandler(event: Event) {
    requestAnimationFrame(() => this.onScroll());
  }
}
