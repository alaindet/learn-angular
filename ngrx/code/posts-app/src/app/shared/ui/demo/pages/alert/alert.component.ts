import { Component } from '@angular/core';

@Component({
  templateUrl: './alert.component.html',
})
export class DemoUiAlertPage {

  showAlert: boolean = false;

  onShowAlert() {
    this.showAlert = true;
  }

  onDismissAlert() {
    this.showAlert = false;
  }
}
