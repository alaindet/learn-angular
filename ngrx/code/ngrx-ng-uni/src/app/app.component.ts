import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loading = true;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event  => {

      if (event instanceof NavigationStart) {
        this.loading = true;
        return;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loading = false;
        return;
      }

    });
  }

  logout() {
    console.log('logout');
  }
}
