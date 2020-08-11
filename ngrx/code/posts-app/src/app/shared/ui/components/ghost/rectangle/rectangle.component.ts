import { Component, ChangeDetectionStrategy, Input, ElementRef, Renderer2, ViewChild, OnInit } from '@angular/core';

import { UiGhostRectangle } from './rectangle.interface';

@Component({
  selector: 'ui-ghost-rectangle',
  styleUrls: ['./rectangle.component.scss'],
  templateUrl: './rectangle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiGhostRectangleComponent implements UiGhostRectangle, OnInit {

  @Input() width: UiGhostRectangle['width'] = '100%';
  @Input() height: UiGhostRectangle['height'] = '1rem';
  @Input() ratio: UiGhostRectangle['ratio'];
  @Input() rounded: UiGhostRectangle['rounded'] = 'no';

  @ViewChild('rectRef', { static: true }) rectRef: ElementRef;

  constructor(
    private renderer: Renderer2,
  ) {}

  ngOnInit() {

    if (this.width && this.height) {
      this.renderer.setStyle(this.rectRef.nativeElement, 'width', this.width);
      this.renderer.setStyle(this.rectRef.nativeElement, 'height', this.height);
      return;
    }

    let w: string;
    let h: string;
    let width: string;
    let height: string;

    if (this.ratio) {
      [w, h] = this.ratio.split(':');
    }

    if (this.width) {
      const intValue = parseInt(this.width);
      const unit = this.width.replace(intValue.toString(), '');
      width = this.width;
      height = ( intValue * (+h) / (+w) ) + unit;
    }

    if (this.height) {
      const intValue = parseInt(this.height);
      const unit = this.height.replace(intValue.toString(), '');
      width = ( intValue *  (+w)  / (+h) ) + unit;
      height = this.height;
    }

    this.renderer.setStyle(this.rectRef.nativeElement, 'width', width);
    this.renderer.setStyle(this.rectRef.nativeElement, 'height', height);
  }

}
