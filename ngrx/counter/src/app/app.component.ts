import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Counter app</h1>
    <app-feature-counter-subject></app-feature-counter-subject>
    <app-feature-counter-store></app-feature-counter-store>
  `,
})
export class AppComponent {}
