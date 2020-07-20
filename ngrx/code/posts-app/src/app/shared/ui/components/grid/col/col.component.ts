import { Component, ChangeDetectionStrategy, Input, ElementRef, OnChanges, Renderer2 } from '@angular/core';

import { UiCol } from './col.interface';

@Component({
  selector: 'ui-col',
  styleUrls: ['./col.component.scss'],
  templateUrl: './col.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiColComponent implements UiCol, OnChanges {

  @Input() size: number;
  @Input('size-md') sizeMd: number;
  @Input('size-lg') sizeLg: number;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnChanges() {
    this.setSizes();
  }

  private setSizes() {
    // Add dyamic classes to element via renderer
  }
}
