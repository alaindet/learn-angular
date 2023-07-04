import { Component, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from 'src/app/features/users/services';

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

  private router = inject(Router);
  private authService = inject(AuthenticationService);

  isSignedIn = this.authService.isSignedIn;

  onSignOut(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.authService.signOut();
    this.router.navigate(['/users/sign-in']);
  }
}
