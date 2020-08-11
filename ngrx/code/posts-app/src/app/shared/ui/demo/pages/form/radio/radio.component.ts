import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './radio.component.html',
})
export class DemoUiFormRadioPage implements OnInit {

  radioForm: FormGroup;
  radioFormOptions: any[] = [
    { value: '0-4', label: 'At most 4 hours', id: 'radio-1' },
    { value: '4-8', label: 'From 4 to 8 hours', id: 'radio-2' },
    { value: '8+', label: 'More than 8 hours', id: 'radio-3' },
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
