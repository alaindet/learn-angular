import { Component } from '@angular/core';

import { UiCoreService } from 'src/app/core/services/ui.service';

@Component({
  templateUrl: './alert.component.html',
})
export class DemoUiAlertPage {

  constructor(
    public ui: UiCoreService,
  ) {}

  setSuccessAlert(show: boolean) {
    this.ui.setAlert({
      message: 'Something good just happened',
      type: 'success',
    });
  }

  setErrorAlert(show: boolean) {
    this.ui.setAlert({
      message: 'Something unexpected just happened',
      type: 'error',
    });
  }
}
