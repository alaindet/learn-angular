import { Component, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { AlertComponent } from '@/shared/components/alert';
import { PlaceholderDirective } from '@/shared/directives/placeholder';
import { AuthService } from '../../services';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnDestroy {

  @ViewChild(PlaceholderDirective, { static: false })
  alertHost: PlaceholderDirective;

  isLoading = false;

  private closeSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {}

  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

  onSubmit(form: NgForm): void {

    if (!form.valid) {
      return;
    }

    const { email, password } = form.value;
    this.isLoading = true;
    this.authService.login(email, password)
      .pipe(finalize(() => {
        this.isLoading = false;
        form.reset();
      }))
      .subscribe({
        next: () => this.router.navigate(['/recipes']),
        error: err => this.showErrorAlert(err),
      });
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
