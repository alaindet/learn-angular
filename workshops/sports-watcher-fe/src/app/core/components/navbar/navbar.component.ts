import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';
import { Store } from '@ngrx/store';

import { signInActions } from '@app/features/user/store';

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
  private store = inject(Store);

  onSignOut(event: Event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.store.dispatch(signInActions.signOut());
    this.router.navigate(['/signin']);
  }
}
