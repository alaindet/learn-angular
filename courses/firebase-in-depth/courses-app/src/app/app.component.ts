import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { NavbarComponent } from './core/navbar';

const imports = [
  RouterLink,
  RouterOutlet,
  NavbarComponent,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ...
}
