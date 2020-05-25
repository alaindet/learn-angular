import { Directive, QueryList, ElementRef, ContentChildren, Output, EventEmitter, HostListener, Input } from '@angular/core';

import { SquashOnScrollItemDirective } from './item.directive';

@Directive({
  selector: '[squashOnScrollContainer]'
})
export class SquashOnScrollContainerDirective {

  @ContentChildren(SquashOnScrollItemDirective)
  items: QueryList<SquashOnScrollItemDirective>;

  @Input() threshold:number;

  @Output() squashableHeight = new EventEmitter<number>();

  private _squashableHeight: number;
  private hasScrolledDown = false;

  constructor(
    private element: ElementRef,
  ) {}

  ngAfterViewInit() {
    this.calculateHeight();
    if (!this.threshold) {
      this.threshold = this._squashableHeight;
      console.log('threshold', this.threshold);
    }
  }

  private triggerSquashables() {
    for (const item of this.items) {
      item.toggleSquashedState();
    }
  }

  private calculateHeight() {
    this._squashableHeight = this.element.nativeElement.offsetHeight;
    this.squashableHeight.emit(this._squashableHeight);
  }

  private onScroll() {
    if (window.pageYOffset > this.threshold && !this.hasScrolledDown) {
      this.hasScrolledDown = true;
      this.triggerSquashables();
      return;
    }
    if (window.pageYOffset < this.threshold && this.hasScrolledDown) {
      this.hasScrolledDown = false;
      this.triggerSquashables();
      return;
    }
  }

  @HostListener('window:scroll')
  private scrollHandler(event: Event) {
    requestAnimationFrame(() => this.onScroll());
  }
}
