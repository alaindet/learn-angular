import { ViewEncapsulation } from '@angular/compiler';
import { Component, HostBinding, inject, Input, SimpleChanges } from '@angular/core';
import { AlertService } from './alert.service';
import { AlertType, ALERT_TYPE } from './types';

function getTypeCssClass(type?: AlertType): string {
  switch (type) {
    case ALERT_TYPE.ERROR:
      return '-type-error';
    case ALERT_TYPE.SUCCESS:
    default:
      return '-type-success';
  }
}

@Component({
  selector: 'app-alert',
  standalone: true,
  template: `
    <div class="__content">
      <ng-content></ng-content>
    </div>
    <button type="button" title="Dismiss alert" (click)="onDismiss()">
      &times;
    </button>
  `,
  styles: [`
    app-alert {
      padding: 1rem;
      border: 2px solid transparent;
      border-radius: 0.25rem;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
    }

    app-alert.-type-error {
      border-color: red;
    }

    app-alert.-type-success {
      border-color: green;
    }
  `],
  encapsulation: ViewEncapsulation.None,
})
export class AlertComponent {

  svc = inject(AlertService);

  @Input('type')
  set typeInput(input: AlertType) {
    this.cssClass = getTypeCssClass(input);
  }

  @HostBinding('class') cssClass!: string;

  onDismiss() {
    this.svc.dismiss();
  }
}
