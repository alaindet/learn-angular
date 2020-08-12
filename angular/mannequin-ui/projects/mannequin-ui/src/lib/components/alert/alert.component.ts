import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { MannequinAlertService } from './alert.service';

@Component({
  selector: 'maq-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MannequinAlertComponent {

  @Input() message: string;

  constructor(
    private alertService: MannequinAlertService,
  ) {}

  onDismiss() {
    this.alertService.clearAlert();
  }
}
