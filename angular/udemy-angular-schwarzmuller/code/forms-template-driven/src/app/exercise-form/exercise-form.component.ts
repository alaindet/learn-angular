import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent {

  @ViewChild('exf') exForm: NgForm;
  defaults = {
    sub: 'basic'
  };
  summary = {
    filled: false,
    email: '',
    password: '',
    subscription: ''
  };

  onSubmit() {

    this.summary = {
      filled: true,
      email: this.exForm.value.exemail,
      password: this.exForm.value.expassword,
      subscription: this.exForm.value.exsub
    };

    console.log(this.exForm);

    this.exForm.reset();

  }

}
