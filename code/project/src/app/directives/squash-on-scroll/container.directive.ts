import { Directive, QueryList, ElementRef, ContentChildren, Output, EventEmitter, HostListener, Input } from '@angular/core';

import { SquashOnScrollItemDirective } from './item.directive';

@Directive({
  selector: '[squashOnScrollContainer]'
})
export class SquashOnScrollContainerDirective {

  @ContentChildren(SquashOnScrollItemDirective)
  items: QueryList<SquashOnScrollItemDirective>;

  @Input() threshold = 100;

  @Output() squashableHeight = new EventEmitter<number>();

  private SCROLLED_DOWN = false;

  constructor(
    private element: ElementRef,
  ) {}

  ngAfterViewInit() {
    this.calculateHeight();
  }

  private triggerSquashables() {
    for (const item of this.items) {
      item.toggleSquashedState();
    }
  }

  private calculateHeight() {
    const height = this.element.nativeElement.offsetHeight;
    this.squashableHeight.emit(height);
  }

  private onScroll() {
    if (window.pageYOffset > this.threshold && !this.SCROLLED_DOWN) {
      this.SCROLLED_DOWN = true;
      this.triggerSquashables();
      return;
    }
    if (window.pageYOffset < this.threshold && this.SCROLLED_DOWN) {
      this.SCROLLED_DOWN = false;
      this.triggerSquashables();
      return;
    }
  }

  @HostListener('window:scroll')
  private scrollHandler(event: Event) {
    requestAnimationFrame(() => this.onScroll());
  }
}
