import { Component, ChangeDetectionStrategy, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

import { toBoolean } from 'src/app/shared/ui/common/functions/to-boolean.function';
import { UiCard } from './card.interface';

@Component({
  selector: 'ui-card',
  styleUrls: ['./card.component.scss'],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardComponent implements OnInit, UiCard {

  @Input() fullHeight = false;

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
  ) {}

  ngOnInit() {
    this.fullHeight = toBoolean(this.fullHeight);
    if (this.fullHeight) {
      this.renderer.setStyle(this.element.nativeElement, 'height', '100%');
    }
  }
}
