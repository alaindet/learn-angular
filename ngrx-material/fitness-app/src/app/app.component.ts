import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './features/auth/services/auth.service';
import { LINKS } from 'src/app/core/data/links.data';
import { Link } from 'src/app/core/models/link.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  links: Link[] = LINKS;
  subs: { [sub: string]: Subscription } = {};

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.hideAuthPathsOnAuthentication();
  }

  ngOnDestroy() {
    for (const sub in this.subs) {
      this.subs[sub].unsubscribe();
    }
  }

  private hideAuthPathsOnAuthentication() {
    this.subs.isAuthenticated = this.authService.isAuthenticated$.subscribe(
      (isAuthenticated: boolean): void => {
        this.links = LINKS.filter(
          (link: Link): boolean => isAuthenticated ? link.onAuth : !link.onAuth
        )
      }
    );
  }
}
