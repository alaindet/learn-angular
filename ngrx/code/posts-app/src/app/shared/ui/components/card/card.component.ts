import { Component, ChangeDetectionStrategy, OnChanges, Input, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';

import { toBoolean } from 'src/app/shared/ui/functions/to-boolean.function';
import { UiCard, UiCardEvents } from './card.interface';

@Component({
  selector: 'ui-card',
  styleUrls: ['./card.component.scss'],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardComponent implements UiCard, OnChanges {

  @Input() fullHeight: UiCard['fullHeight'] = false;
  @Input() dismissable: UiCard['dismissable'] = false;
  @Output() dismissing = new EventEmitter<UiCardEvents['dismissing']>();

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
  ) {}

  ngOnChanges() {
    this.fullHeight = toBoolean(this.fullHeight);
    this.dismissable = toBoolean(this.dismissable);

    if (this.fullHeight) {
      this.makeFullHeight();
    }
  }

  onWillDismiss() {
    this.dismissing.emit({
      animation: () => this.onDismissed(),
      delay: 200,
    });
  }

  onDismissed() {
    this.renderer.addClass(this.element.nativeElement, 'dismissed');
  }

  private makeFullHeight() {
    this.renderer.setStyle(this.element.nativeElement, 'height', '100%');
  }
}
