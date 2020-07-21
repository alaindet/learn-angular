import { Component, ChangeDetectionStrategy, Input, ElementRef, OnChanges, Renderer2 } from '@angular/core';

import { toNumber } from './../../../common/functions/to-number.function';
import { UiCol } from './col.interface';

@Component({
  selector: 'ui-col',
  styleUrls: ['./col.component.scss'],
  templateUrl: './col.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiColComponent implements UiCol, OnChanges {

  @Input() size: UiCol['size'];
  @Input() sizeMd: UiCol['sizeMd'];
  @Input() sizeLg: UiCol['sizeLg'];

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnChanges() {
    this.castInputsToNumber();
    this.setClassesOnHost();
  }

  private castInputsToNumber() {
    this.size = toNumber(this.size);
    this.sizeMd = toNumber(this.sizeMd);
    this.sizeLg = toNumber(this.sizeLg);
  }

  private setClassesOnHost() {

    const classNames = [
      this.size ? `size-${this.size}` : null,
      this.sizeMd ? `size-md-${this.sizeMd}` : null,
      this.sizeLg ? `size-lg-${this.sizeLg}` : null,
    ];

    for (const className of classNames) {
      if (className) {
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }
}
