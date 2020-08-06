import { Component, ChangeDetectionStrategy, OnChanges, Input, Renderer2, ElementRef, Output, EventEmitter } from '@angular/core';

import { toBoolean } from 'src/app/shared/ui/common/functions/to-boolean.function';
import { UiCard } from './card.interface';

@Component({
  selector: 'ui-card',
  styleUrls: ['./card.component.scss'],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiCardComponent implements UiCard, OnChanges {

  @Input() fullHeight: UiCard['fullHeight'] = false;
  @Input() dismissable: UiCard['dismissable'] = false;
  @Output() dismissed = new EventEmitter<void>();

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

  onDismiss() {
    this.dismissed.emit();
  }

  private makeFullHeight() {
    this.renderer.setStyle(this.element.nativeElement, 'height', '100%');
  }
}
