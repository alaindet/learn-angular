import { Component } from '@angular/core';

import { UiCoreService } from 'src/app/core/services/ui.service';
import { UiAlertService } from './../../../components/alert/alert.service';

@Component({
  templateUrl: './alert.component.html',
})
export class DemoUiAlertPage {

  constructor(
    public ui: UiCoreService,
    public alertService: UiAlertService,
  ) {}

  showSuccessAlert() {
    this.alertService.setAlert({
      message: 'Something good just happened',
      type: 'success',
    });
  }

  showErrorAlert() {
    this.alertService.setAlert({
      message: 'Something unexpected just happened',
      type: 'error',
    });
  }
}
