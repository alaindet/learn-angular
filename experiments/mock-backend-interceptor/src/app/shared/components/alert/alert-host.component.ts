import { Component, inject } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert-host',
  standalone: true,
  providers: [AlertService],
  template: `
    <app-alert></app-alert>
  `,
})
export class AlertHostComponent {
  svc = inject(AlertService);
}
