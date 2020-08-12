import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UiFormRadioOption } from './../../../../components/form/radio/radio.interface';

@Component({
  templateUrl: './radio.component.html',
})
export class DemoUiFormRadioPage implements OnInit {

  radioForm: FormGroup;
  radioFormOptions: UiFormRadioOption[] = [
    { value: '0-4', label: 'At most 4 hours' },
    { value: '4-8', label: 'From 4 to 8 hours' },
    { value: '8+', label: 'More than 8 hours' },
  ];

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.radioForm = this.fb.group({
      'sleep': null,
    });
  }

  onInputChange(value: boolean) {
    console.log('onInputChange', value);
  }

  onSubmit() {
    console.log('onSubmit', this.radioForm.value);
  }
}
