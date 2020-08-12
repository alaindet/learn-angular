import { Component } from '@angular/core';

import { MannequinAlertService } from 'mannequin-lib';

@Component({
  selector: 'app-root',
  styles: [],
  template: `
    <h1>Mannequin demo app</h1>
    <ng-container *ngIf="alertService.alert | async as alert">
      <mq-alert>{{ alert }}</mq-alert>
    </ng-container>
    <button (click)="onShowAlert()">Show alert</button>
  `,
})
export class AppComponent {

  constructor(
    public alertService: MannequinAlertService,
  ) {}

  onShowAlert() {
    console.log('onShowAlert');
    this.alertService.setAlert('A message from the app component');
  }
}
