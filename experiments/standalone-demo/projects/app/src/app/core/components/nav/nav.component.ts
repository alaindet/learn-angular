import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// TODO: Move to shared
export type LinkItem = {
  url: string;
  label: string;
};

export const NAV_LINKS = [
  { url: '/', label: 'Home' },
  { url: '/lists', label: 'Lists' },
];

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./nav.component.scss'],
  template: `
    <nav>
      <ul>
        <li *ngFor="let link of links">
          <a [routerLink]="link.url" routerLinkActive="-active">
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>
  `,
})
export class NavigationComponent {
  links = NAV_LINKS;
}
