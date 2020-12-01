import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

import { throwError, Observable } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-passenger-viewer',
  styleUrls: ['./passenger-viewer.component.scss'],
  template: `
    <div>
      <button (click)="goBack()">&lsaquo; Go back</button>
      <app-passenger-form
        [detail]="passenger"
        (update)="onUpdatePassenger($event)"
      ></app-passenger-form>
    </div>
  `
})
export class PassengerViewerComponent implements OnInit {

  public passenger: Passenger;

  constructor(
    private passengerService: PassengerDashboardService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {

    this.route.params
      .pipe(
        switchMap(
          (data: Passenger): Observable<Passenger> => {
            return this.passengerService.getPassenger(data.id);
          }
        ),
        catchError(
          (error: any): any => throwError(error)
        )
      )
      .subscribe(
        (data: Passenger): void => {
          this.passenger = data;
        }
      );
  }

  public onUpdatePassenger(event: Passenger) {
    this.passengerService.updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      });
  }

  public goBack(): void {
    this.router.navigate(['/passengers']);
  }

}
