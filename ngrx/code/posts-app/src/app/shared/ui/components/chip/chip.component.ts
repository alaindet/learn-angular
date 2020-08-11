import { Component, Input, OnChanges, ElementRef, Renderer2, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { toBoolean } from './../../functions/to-boolean.function';
import { UiChip } from './chip.interface';

@Component({
  selector: 'ui-chip',
  styleUrls: ['./chip.component.scss'],
  templateUrl: './chip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiChipComponent implements UiChip, OnChanges {

  @Input() color: UiChip['color'] = 'primary';
  @Input() size: UiChip['size'] = 'medium';
  @Input() dismissable: UiChip['dismissable'] = false;
  @Output() dismissed = new EventEmitter<void>();

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnChanges() {
    this.dismissable = toBoolean(this.dismissable);
    this.setClassesOnHost();
  }

  onDismiss() {
    this.dismissed.emit();
  }

  private setClassesOnHost() {

    const classNames = [
      `color-${this.color}`,
      `size-${this.size}`,
    ];

    for (const className of classNames) {
      this.renderer.addClass(this.element.nativeElement, className);
    }
  }
}
