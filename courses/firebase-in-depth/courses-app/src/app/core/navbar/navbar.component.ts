import { Component, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

const imports = [
  NgTemplateOutlet,
  RouterLink,
  RouterLinkActive,
];

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  isSignedIn = signal(false);

  onSignOut() {
    console.log('onSignOut');
  }
}
