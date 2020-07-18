import { Component } from '@angular/core';

@Component({
  templateUrl: './alert.component.html',
})
export class DemoUiAlertPage {

  showSuccessAlert: boolean = false;
  showErrorAlert: boolean = false;

  setSuccessAlert(show: boolean) {
    this.showSuccessAlert = show;
  }

  setErrorAlert(show: boolean) {
    this.showErrorAlert = show;
  }
}
