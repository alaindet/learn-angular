import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.form = this.fb.group({
      rating: [null, Validators.required],
      name: ['', Validators.required],
    });
  }

  public onFormChangeValue(): void {
    this.form.setValue({
      rating: 2,
      name: 'Alain',
    });
  }

  public onFormReset(): void {
    this.form.reset();
  }

  public onFormSubmit(): void {
    console.log('form valid', this.form.valid);
    console.log('form value', this.form.value);
  }
}
