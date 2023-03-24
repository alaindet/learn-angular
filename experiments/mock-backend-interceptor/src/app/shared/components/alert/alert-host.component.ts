import { Component, inject } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert-host',
  standalone: true,
  providers: [AlertService],
  template: `
    <app-alert *ngIf="svc.alert$ | async as alert" type="alert.type">
      {{ alert.message }}
    </app-alert>
  `,
  styles: [`
    app-alert-host {
      position: fixed;
      top: 1rem;
      right: 1rem;
    }
  `],
})
export class AlertHostComponent {
  svc = inject(AlertService);
}
