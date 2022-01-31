import { Component } from '@angular/core';

import { FloatingService } from './floating.service';

@Component({
  selector: 'app-floating-host',
  template: `
    <ng-container *ngFor="let template of floatingService.templates$ | async">
      <ng-container [ngTemplateOutlet]="template"></ng-container>
    </ng-container>
  `,
})
export class FloatingHostComponent {
  constructor(
    public floatingService: FloatingService,
  ) {}
}
