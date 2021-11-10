import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Passenger } from './../../models/passenger.interface';
import { PassengerDashboardService } from './../../services/passenger-dashboard.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styles: ['']
})
export class PassengerDashboardComponent implements OnInit, OnDestroy {

  public passengers: Passenger[] = [];
  public isAnyData = false;
  public isLoading = false;
  private subs: { [key: string]: Subscription; } = {};

  constructor(
    private readonly passengersService: PassengerDashboardService,
    private router: Router,
  ) {}

  public ngOnInit(): void {

    this.subs.isAnyData = this.passengersService.getIsAnyData()
      .subscribe(
        (isAnyData: boolean) => this.isAnyData = isAnyData,
        (error: any) => console.log('ERROR', error)
      );

    this.subs.isLoading = this.passengersService.getIsLoading()
      .subscribe(
        (isLoading: boolean) => this.isLoading = isLoading,
        (error: any) => console.log('ERROR', error)
      );

    this.subs.passengers = this.passengersService.getPassengers()
      .subscribe(
        (passengers: Passenger[]) => this.passengers = passengers,
        (error: any) => console.log('ERROR', error)
      );
  }

  public ngOnDestroy(): void {
    for (const sub of Object.values(this.subs)) {
      sub.unsubscribe();
    }
  }

  public onEdit(passenger: Passenger): void {
    this.passengersService
      .updatePassenger(passenger)
      .subscribe(
        (response: Passenger) => {
          this.passengers = this.passengers.map(
            (item: Passenger) => {
              return passenger.id === item.id ? passenger : item;
            }
          );
        },
        (error: any) => console.log('ERROR', error)
      );
  }

  public onRemove(passenger: Passenger): void {
    this.passengersService
      .removePassenger(passenger)
      .subscribe(
        (response: any) => {
          this.passengers = this.passengers.filter(
            (item: Passenger) => {
              return passenger.id !== item.id;
            }
          );
        },
        (error: any) => console.log('ERROR', error)
      );
  }

  public onView(passenger: Passenger): void {
    this.router.navigate(['/passengers', passenger.id]);
  }

}
