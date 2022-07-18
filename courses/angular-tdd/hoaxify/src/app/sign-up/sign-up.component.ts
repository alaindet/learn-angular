import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {

  username = '';
  email = '';
  pwd = '';
  pwdConfirm = '';
  disabled = true;

  onSubmit(event: Event): void {
    event.preventDefault();

    const payload = {
      username: this.username,
      email: this.email,
      password: this.pwd,
    };

    fetch('/api/1.0/users', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  onChangeUsername(event: Event): void {
    this.username = (event.target as HTMLInputElement).value;
  }

  onChangeEmail(event: Event): void {
    this.email = (event.target as HTMLInputElement).value;
  }

  onChangePassword(event: Event): void {
    this.pwd = (event.target as HTMLInputElement).value;
    this.updateValidity();
  }

  onChangeConfirmPassword(event: Event): void {
    this.pwdConfirm = (event.target as HTMLInputElement).value;
    this.updateValidity();
  }

  private updateValidity(): void {
    this.disabled = this.pwd !== this.pwdConfirm;
  }
}
