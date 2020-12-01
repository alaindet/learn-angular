import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercise-reactive-form',
  templateUrl: './exercise-reactive-form.component.html',
  styleUrls: ['./exercise-reactive-form.component.css']
})
export class ExerciseReactiveFormComponent implements OnInit {

  myForm: FormGroup;
  stati = ['stable', 'critical', 'finished'];

  ngOnInit(): void {
    // Create form
    this.myForm = new FormGroup({
      'name': new FormControl(
        null,
        [Validators.required, this.validateNameIsNotTest.bind(this)]
      ),
      'email': new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      'status': new FormControl(
        this.stati[0]
      )
    });

    // Log status
    // this.myForm.statusChanges.subscribe(st => console.log(st));
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }

  validateNameIsNotTest(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { nameIsTest: true };
    }
    return null;
  }

  validateAsyncNameIsNotTest(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((res, err) => {
      setTimeout(() => {
        res(this.validateNameIsNotTest(control));
      }, 1500);
    });
  }

}
