import { Component } from '@angular/core';

import { MannequinAlertService } from 'mannequin-ui';

@Component({
  selector: 'app-root',
  styles: [`

  `],
  template: `
    <h1>Mannequin demo app</h1>

    <maq-magic-box color="blue">
      Hello, World!
    </maq-magic-box>

    <maq-alert
      *ngIf="alertService.alert | async as alert"
      [message]="alert"
    ></maq-alert>
    <button (click)="onShowAlert()">Show alert</button>

    <maq-polygon shape="square"></maq-polygon>
    <maq-polygon shape="pentagon"></maq-polygon>
    <maq-polygon shape="hexagon"></maq-polygon>
    <maq-polygon shape="circle"></maq-polygon>
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
