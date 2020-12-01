import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') myForm: NgForm;
  defaultQuestion = 'pet';
  secretAnswer = '';
  genders = ['male', 'female'];

  formSummary = {
    username: '',
    email: '',
    gender: '',
    secretQuestion: '',
    secretAnswer: ''
  };

  suggestUserName() {

    const suggestedName = 'Superuser';

    // // First method (VERY INEFFICIENT)
    // // Sets ALL values of the form, you need a value for each control
    // this.myForm.setValue({
    //   userGroup: {
    //     username: suggestedName,
    //     email: '',
    //     gender: 'male'
    //   },
    //   'secret-question': 'pet',
    //   'secret-answer': 'Billy'
    // });

    // Second approach
    // Set just some values of the form
    this.myForm.form.patchValue({
      userGroup: {
        username: suggestedName
      }
    });

  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {

    // Extract data from form
    this.formSummary = {
      username: this.myForm.value.userGroup.username,
      email: this.myForm.value.userGroup.email,
      gender: this.myForm.value.userGroup.gender,
      secretQuestion: this.myForm.value['secret-question'],
      secretAnswer: this.myForm.value['secret-answer']
    };

    console.log(this.myForm);

    // Reset the form
    // You can pass a value object like for setValue() to reset to a given state
    this.myForm.reset();

  }

}
