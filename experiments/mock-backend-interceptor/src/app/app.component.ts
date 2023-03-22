import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Mock backend demo</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
