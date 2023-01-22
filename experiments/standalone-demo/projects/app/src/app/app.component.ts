import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './core/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    NavigationComponent,
  ],
  template: `
    <h1>Standalone demo app</h1>
    <header>
      <app-nav></app-nav>
    </header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
