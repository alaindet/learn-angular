import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, Renderer2, ElementRef, HostListener } from '@angular/core';

import { UiAlert, UiAlertEvents } from './alert.interface';
import { toNumber } from './../../functions/to-number.function';

@Component({
  selector: 'ui-alert',
  styleUrls: ['./alert.component.scss'],
  templateUrl: './alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiAlertComponent implements UiAlert {

  @Input() message: UiAlert['message'];
  @Input() type: UiAlert['type'] = 'success';
  @Input() delay: UiAlert['delay'] = 3000;

  @Output() dismissing = new EventEmitter<UiAlertEvents['dismissing']>();

  private timeout: any;

  constructor(
    private renderer: Renderer2,
    private element: ElementRef,
  ) {}

  ngOnChanges() {
    this.delay = toNumber(this.delay);
    this.setExpiration();
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

  @HostListener('mouseover') onMouseOver() {
    this.stopExpiration();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setExpiration();
  }

  private setExpiration() {
    this.timeout = setTimeout(() => this.onWillDismiss(), +this.delay);
  }

  private stopExpiration() {
    clearTimeout(this.timeout);
  }
}
