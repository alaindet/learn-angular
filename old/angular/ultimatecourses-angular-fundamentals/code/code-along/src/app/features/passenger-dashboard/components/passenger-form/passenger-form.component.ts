import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from './../../models/passenger.interface';
import { Baggage } from './../../models/baggage.interface';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent {

  @Input()
  public detail: Passenger;

  @Output()
  public update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  // Select options
  public baggage: Baggage[] = [
    {
      key: 'none',
      value: 'No baggage'
    },
    {
      key: 'hand-only',
      value: 'Hand baggage'
    },
    {
      key: 'hold-only',
      value: 'Hold baggage',
    },
    {
      key: 'hand-hold',
      value: 'Hand and hold baggage'
    }
  ];

  public toggleCheckIn(checkedIn: boolean): void {
    if (checkedIn) {
      // this.detail.checkedInDate = +new Date();
      this.detail.checkedInDate = Date.now();
    }
  }

  public onSubmit(passengerForm: Passenger, isValid: boolean): void {
    if (!isValid) {
      return;
    }
    this.update.emit(passengerForm);
  }

}
