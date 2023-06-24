import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

const imports = [
  NgIf,
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

  private router = inject(Router);

  onSignOut() {
    // TODO: Dispatch sign out action
    this.router.navigate(['/signin']);
  }
}
