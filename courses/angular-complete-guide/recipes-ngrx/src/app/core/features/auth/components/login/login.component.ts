import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { AlertsService } from '@/core/features/alerts';
import { PlaceholderDirective } from '@/shared/directives/placeholder';
import { AuthService } from '../../services';

@Component({
  templateUrl: './login.component.html',
})
export class AuthComponent {

  @ViewChild(PlaceholderDirective, { static: false })
  alertHost: PlaceholderDirective;

  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertsService,
  ) {}

  onSubmit(form: NgForm): void {

    if (!form.valid) {
      return;
    }

    const { email, password } = form.value;
    this.isLoading = true;
    this.authService.login(email, password)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: () => {
          this.router.navigate(['/recipes']);
          this.alertService.addSuccess('You logged in.');
          form.reset();
        },
        error: err => {
          console.error(err);
          this.alertService.addError(err.error.message);
        },
      });
  }
}
