import { Passenger } from './../../models/passenger.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styles: [``]
})
export class PassengerCountComponent {

  @Input() isLoading = false;
  @Input() items: Passenger[] = [];

  public checkedInCount(): number {

    if (!this.items) {
      return 0;
    }

    const checkedInPassengers = this.items.filter(
      (passenger: Passenger) => passenger.checkedIn
    );

    return checkedInPassengers.length;
  }
}
