import { Component, Input, OnInit, Renderer2, ElementRef, ChangeDetectionStrategy } from '@angular/core';

import { UiTiles } from './tiles.interface';

@Component({
  selector: 'ui-tiles',
  styleUrls: ['./tiles.component.scss'],
  templateUrl: './tiles.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTilesComponent implements UiTiles, OnInit {

  @Input() tiles: UiTiles['tiles'] = 1;
  @Input() tilesMd: UiTiles['tilesMd'];
  @Input() tilesLg: UiTiles['tilesLg'];
  @Input() withGaps: UiTiles['withGaps'] = 'no';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.setClassesOnHost();
  }

  private setClassesOnHost() {

    const classNames = [
      this.tiles ? `tiles-${this.tiles}` : null,
      this.tilesMd ? `md-tiles-${this.tilesMd}` : null,
      this.tilesLg ? `lg-tiles-${this.tilesLg}` : null,
      this.withGaps ? `gaps-${this.withGaps}` : null,
    ];

    for (const className of classNames) {
      if (className) {
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }
}
