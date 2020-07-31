import { Component } from '@angular/core';

import { UiCoreService } from './core/services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public ui: UiCoreService,
  ) {}

  onDismissAlert() {
    this.ui.setAlert(null);
  }
}