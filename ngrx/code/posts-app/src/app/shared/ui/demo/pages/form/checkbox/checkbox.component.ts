import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './checkbox.component.html',
})
export class DemoUiFormCheckboxPage implements OnInit {

  checkboxForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.checkboxForm = this.fb.group({
      'foo': true,
      'bar': false,
      'baz': true,
    });
  }

  onSubmit() {
    console.log('onSubmit', this.checkboxForm.value);
  }
}
