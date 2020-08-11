import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './radio.component.html',
})
export class DemoUiFormRadioPage implements OnInit {

  radioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.radioForm = this.fb.group({
      'sleep': '0-4',
    });
  }

  onInputChange(value: boolean) {
    console.log('onInputChange', value);
  }

  onSubmit() {
    console.log('onSubmit', this.radioForm.value);
  }
}
