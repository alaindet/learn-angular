import { Component, ChangeDetectionStrategy, ElementRef, Renderer2, OnChanges, Input } from '@angular/core';

import { toBoolean } from 'src/app/shared/ui/common/functions/to-boolean.function';
import { UiRow } from './row.interface';

@Component({
  selector: 'ui-row',
  styleUrls: ['./row.component.scss'],
  templateUrl: './row.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiRowComponent implements UiRow, OnChanges {

  @Input() noWrap: UiRow['noWrap'] = false;
  @Input() withGutters: UiRow['withGutters'] = false;
  @Input() justify: UiRow['justify'];

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnChanges() {
    this.castInputsToBoolean();
    this.setClassesOnHost();
  }

  private castInputsToBoolean() {
    this.noWrap = toBoolean(this.noWrap);
    this.withGutters = toBoolean(this.withGutters);
  }

  private setClassesOnHost() {

    const classNames = [
      this.noWrap ? 'no-wrap' : null,
      this.justify ? `justify-${this.justify}` : null,
      this.withGutters ? 'with-gutters' : null,
    ];

    for (const className of classNames) {
      if (className) {
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }
}
