import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'create-user',
  templateUrl: 'create-user.component.html',
  styleUrls: ['create-user.component.css'],
})
export class CreateUserComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password:  new FormControl('', [Validators.required, Validators.minLength(5)]),
    admin: new FormControl(false),
  });

  onCreateUser() {
    const user = this.form.value;
    console.log('onCreateUser', user);
  }
}
