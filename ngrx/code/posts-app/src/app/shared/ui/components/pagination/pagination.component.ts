import { Component, ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { toNumber } from 'src/app/shared/ui/common/functions/to-number.function';
import { toBoolean } from 'src/app/shared/ui/common/functions/to-boolean.function';
import { UiPagination } from './pagination.interface';

@Component({
  selector: 'ui-pagination',
  styleUrls: ['./pagination.component.scss'],
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPaginationComponent implements OnChanges {

  @Input() current: UiPagination['current'];
  @Input() total: UiPagination['total'] = -1;
  @Input() show: UiPagination['show'] = 3;
  @Input() simple: UiPagination['simple'] = false;
  @Input() color: UiPagination['color'] = 'primary';
  @Output() clicked = new EventEmitter<number>();

  pages: Array<number | null> = null;
  previous: number | null = null;
  next: number | null = null;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  ngOnChanges() {
    this.current = toNumber(this.current);
    this.total = toNumber(this.total);
    this.show = toNumber(this.show);
    this.simple = toBoolean(this.simple);

    if (!this.simple) {
      this.pages = this.calculatePageNumbers(this.current, this.total, this.show);
      this.next = this.calculateNextPage(this.current, this.total);
    } else {
      this.next = +this.current + 1;
    }

    this.previous = this.calculatePreviousPage(this.current);
  }

  public onClick(index: number): void {
    if (!index) {
      return;
    }

    this.clicked.emit(index);
  }

  private calculatePageNumbers(
    current: number,
    total: number,
    show: number,
  ): number[] {

    let pages = [];
    const radius = Math.floor(show / 2);

    // Build neighbour page numbers
    let start = current - radius;
    for (let i = 0; i < show; i++) {
      pages.push(start);
      start = start + 1;
    }

    // Fix left side if first page < 1
    while (pages[0] < 1) {
      pages = pages.map(page => page + 1);
    }

    // Radius too big?
    if (total < show) {
      pages = pages.slice(0, total);
    }

    // Fix right side
    while (pages[pages.length - 1] > total) {
      pages = pages.map(page => page - 1);
    }

    // Add missing numbers (as null) on the left
    if (pages[0] > 2) {
      pages = [1, null, ...pages];
    } else if (pages[0] > 1) {
      pages = [1, ...pages];
    }

    // Add missing numbers (as null) on the right
    if (pages[pages.length - 1] + 1 < total) {
      pages = [...pages, null, total];
    } else if (pages[pages.length - 1] < total) {
      pages = [...pages, total];
    }

    return pages;
  }

  /**
   * If null, disable the previous link
   */
  private calculatePreviousPage(current: number): number | null {
    return (current > 1) ? current - 1 : null;
  }

  /**
   * If null, disable next link
   */
  private calculateNextPage(current: number, total: number): number | null {

    if (total === -1) {
      return (+current) + 1;
    }

    return (current < total) ? (+current) + 1 : null;
  }
}
