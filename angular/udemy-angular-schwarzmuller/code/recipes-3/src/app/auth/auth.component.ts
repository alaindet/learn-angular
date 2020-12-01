import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isRegistering = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService
  ) {}

  onSwitchMode(): void {
    this.isRegistering = !this.isRegistering;
  }

  onSubmit(form: NgForm): void {

    // ERROR: Invalid form
    if (!form.valid) {
      console.log('Form is invalid');
      return;
    }

    // Extract data
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    if (this.isRegistering) {
      // Try to register (and login after that)
      this.authService.signUp(email, password).subscribe(
        (success) => {
          console.log('Success', success);
          this.isLoading = false;
        },
        (error: { message: string }) => {
          console.log('Error', error);
          this.error = error.message;
          this.isLoading = false;
        }
      );
    } else {
      this.authService.signIn(email, password).subscribe(
        (success) => {
          console.log('Success', success);
          this.isLoading = false;
        },
        (error: { message: string }) => {
          console.log('Error', error);
          this.error = error.message;
          this.isLoading = false;
        }
      );
    }

    // Reset the form
    form.reset();
  }

}
