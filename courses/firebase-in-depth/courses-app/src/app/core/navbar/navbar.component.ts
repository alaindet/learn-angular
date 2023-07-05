import { Component, computed, inject } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/features/users/services';

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
  private authService = inject(AuthService);

  isSignedIn = this.authService.isSignedIn;
  email = computed(() => this.authService.user()?.email);

  onSignOut(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.authService.signOut();
    this.router.navigate(['/users/sign-in']);
  }
}
