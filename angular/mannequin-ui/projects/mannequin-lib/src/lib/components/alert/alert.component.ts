import { Component, ViewEncapsulation } from '@angular/core';

import { MannequinAlertService } from './alert.service';

@Component({
  selector: 'mq-alert',
  styles: [`
    :root {
      --mq-alert-spacing: 1rem;
      --mq-alert-dismiss-font-size: 1.66rem;
      --mq-alert-min-height: 3rem;
      --mq-alert-color-background: #3c3d87;
      --mq-alert-color-text: #f0f0f0;
      --mq-alert-color-dismiss-hover: #ffd571;
    }
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mq-alert {
      position: relative;
      display: flex;
      justify-content: space-between;
      min-height: var(--mq-alert-min-height);
      padding: var(--mq-alert-spacing);
      margin: var(--mq-alert-spacing);
      border-radius: var(--mq-alert-spacing);
      background-color: var(--mq-alert-color-background);
      color: var(--mq-alert-color-text);
    }
    .mq-alert__content {
      text-align: justify;
    }
    .mq-alert__dismiss {
      position: absolute;
      top: var(--mq-alert-spacing);
      right: var(--mq-alert-spacing);
      font-size: var(--mq-alert-dismiss-font-size);
      color: var(--mq-alert-color-text);
      cursor: pointer;
      transition: color 0.2s ease-in-out;
    }
    .mq-alert__dismiss:hover {
      color: var(--mq-alert-color-dismiss-hover);
    }
  `],
  template: `
    <div class="mq-alert">
      <div class="mq-alert__content"><ng-content></ng-content></div>
      <div class="mq-alert__dismiss" (click)="onDismiss()">&times;</div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class MannequinAlertComponent {

  constructor(
    private alertService: MannequinAlertService,
  ) {}

  onDismiss() {
    this.alertService.clearAlert();
  }
}
