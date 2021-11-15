import { Component, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { AuthService } from '../../services';
import { AuthResponseData } from '../../types';
import { AlertComponent } from 'src/app/shared/alert';
import { PlaceholderDirective } from '../../../shared/placeholder/placeholder.directive';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnDestroy {

  @ViewChild(PlaceholderDirective, { static: false })
  alertHost: PlaceholderDirective;

  isLoginMode = true;
  isLoading = false;
  error: string | null = null;

  private closeSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const { email, password } = form.value;
    let authRequest: Observable<AuthResponseData>;
    this.isLoading = true;

    if (this.isLoginMode) {
      authRequest = this.authService.login(email, password);
    } else {
      authRequest = this.authService.signup(email, password);
    }

    authRequest
      .pipe(finalize(() => this.isLoading = false))
      .subscribe({
        next: () => {
          this.router.navigate(['/recipes']);
        },
        error: errorMessage => {
          this.error = errorMessage;
          this.showErrorAlert(errorMessage);
        },
      });

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

  private showErrorAlert(message: string) {
    const cmp = AlertComponent;
    const cmpFactory = this.componentFactoryResolver.resolveComponentFactory(cmp);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const cmpRef = hostViewContainerRef.createComponent(cmpFactory);

    // Set as input
    cmpRef.instance.message = message;

    // Listen to an output
    this.closeSub = cmpRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
