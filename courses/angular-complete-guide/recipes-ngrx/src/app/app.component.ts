import { Component, OnInit } from '@angular/core';

import { AuthService } from '@/core/features/auth';
import { AlertsService } from './core/features/alerts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    public alertsService: AlertsService,
  ) {}

  ngOnInit(): void {
    this.authService.autoLogin();
  }
}
