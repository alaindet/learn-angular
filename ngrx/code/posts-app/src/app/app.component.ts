import { Component } from '@angular/core';

import { UiCoreService } from './core/services/ui.service';
import { UiAlertService } from './shared/ui/components/alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public ui: UiCoreService,
    public alertService: UiAlertService,
  ) {}

  ngOnInit() {
    this.alertService.setAlert({
      message: 'Testing purposes',
      type: 'success',
    });
  }

  onDismissAlert(dismissing: any) {
    dismissing.animation();
    setTimeout(() => this.alertService.setAlert(null), dismissing.delay);
  }
}
