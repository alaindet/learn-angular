import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
    <div class="-container">
      <div class="-circle -circle-1"></div>
      <div class="-circle -circle-2"></div>
      <div class="-circle -circle-3"></div>
      <div class="-circle -circle-4"></div>
    </div>
  `,
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent {}
