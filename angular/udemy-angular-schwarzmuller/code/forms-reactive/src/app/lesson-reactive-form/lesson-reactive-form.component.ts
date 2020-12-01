import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lesson-reactive-form',
  templateUrl: './lesson-reactive-form.component.html',
  styleUrls: ['./lesson-reactive-form.component.css']
})
export class LessonReactiveFormComponent implements OnInit {

  forbiddenUsernames = ['Mario', 'Luigi'];
  genders = ['male', 'female'];
  myForm: FormGroup;

  ngOnInit() {

    // Create a new reactive form
    this.myForm = new FormGroup({
      'requiredData': new FormGroup({
        'username': new FormControl(
          null,
          [Validators.required, this.validateForbiddenUsernames.bind(this)]
        ),
        'email': new FormControl(
          null,
          [Validators.required, Validators.email],
          this.validateForbiddenEmails.bind(this)
        )
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // Log form value and state changes
    // this.myForm.valueChanges.subscribe(val => console.log('valueChanges', val));
    // this.myForm.statusChanges.subscribe(st => console.log('statusChanges', st));

    // // Set all default values
    // this.myForm.setValue({
    //   'requiredData': {
    //     'username': 'alaindet',
    //     'email': 'test@test.com',
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // });

    // // Set just some values
    // this.myForm.patchValue({
    //   'requiredData': {
    //     'email': 'alain.det@gmail.com'
    //   }
    // });

  }

  onSubmit(): void {
    console.log(this.myForm);
  }

  onAddHobby(): void {
    const control = new FormControl(null, Validators.required);
    const dynamicControls = this.myForm.get('hobbies') as FormArray;
    dynamicControls.push(control);
  }

  validateForbiddenUsernames(control: FormControl): { [s: string]: boolean } {

    // ERROR: Username is forbidden
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { usernameIsForbidden: true };
    }

    // Validation worked (You can also avoid the return statement)
    return null;

  }

  /**
   * Simulates a server-side validation by rejecting emails = "test@test.com"
   * Delay is 1.5 seconds
   */
  validateForbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((res, err) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          res({ 'emailIsForbidden': true });
        } else {
          res(null);
        }
      }, 1500);
    });
  }

}
