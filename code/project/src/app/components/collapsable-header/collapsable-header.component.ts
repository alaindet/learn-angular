import { Component, AfterViewInit, ChangeDetectionStrategy, HostListener, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collapsable-header',
  templateUrl: './collapsable-header.component.html',
  styleUrls: ['./collapsable-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollapsableHeaderComponent implements AfterViewInit {

  @Output() headerHeight = new EventEmitter<number>();

  private THRESHOLD = 100;
  private SCROLLED_DOWN = false;
  private CSS_TARGET = 'collapsed';
  private collapsables: any;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit() {
    this.initCollapsables();
    this.calculateHeaderHeight();
  }

  private initCollapsables() {
    this.collapsables = this.element.nativeElement.querySelectorAll('.collapsable');
    for (const item of this.collapsables) {
      this.renderer.setStyle(item, 'height', item.offsetHeight);
    }
  }

  private triggerCollapsables() {
    for (const item of this.collapsables) {
      if (item.classList.contains(this.CSS_TARGET)) {
        item.classList.remove(this.CSS_TARGET);
      } else {
        item.classList.add(this.CSS_TARGET);
      }
    }
  }

  private calculateHeaderHeight() {
    const height = this.element.nativeElement.offsetHeight;
    this.headerHeight.emit(height);
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
