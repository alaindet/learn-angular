import { ViewEncapsulation } from '@angular/compiler';
import { Component, HostBinding, Input } from '@angular/core';
import { AlertService } from './alert.service';
import { AlertType, ALERT_TYPE } from './types';

const DEFAULT_CSS_CLASS = '-type-success';

@Component({
  selector: 'app-alert',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: [`
    app-alert {

    }
  `],
  encapsulation: ViewEncapsulation.None,
})
export class AlertHostComponent {

  @Input() type: AlertType = ALERT_TYPE.SUCCESS;

  @Input('type')
  set typeInput(input: AlertType) {
    this.cssClass = this.styleType(input);
  }

  @HostBinding('class') cssClass = DEFAULT_CSS_CLASS;

  private styleType(type: AlertType): string {
    switch (type) {
      case ALERT_TYPE.ERROR:
        return '-type-error';
      case ALERT_TYPE.SUCCESS:
      default:
        return '-type-success';
    }
  }
}
