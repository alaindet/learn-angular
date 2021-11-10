import { Passenger } from './../models/passenger.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  private readonly API_URL = 'http://localhost:4242/passengers';
  private isLoading = new BehaviorSubject<boolean>(false);
  private isAnyData = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly http: HttpClient,
  ) {}

  public getIsLoading(): BehaviorSubject<boolean> {
    return this.isLoading;
  }

  public getIsAnyData(): BehaviorSubject<boolean> {
    return this.isAnyData;
  }

  public getPassengers(): Observable<Passenger[]> {
    this.isLoading.next(true);
    return this.http.get<any>(this.API_URL).pipe(
      tap(() => {
        this.isLoading.next(false);
        this.isAnyData.next(true);
      }),
      catchError((error: any): any => throwError(error))
    );
  }

  public getPassenger(id: number): Observable<Passenger> {
    this.isLoading.next(true);
    return this.http.get<any>(`${this.API_URL}/${id}`).pipe(
      tap(() => this.isLoading.next(false)),
      catchError((error: any): any => throwError(error))
    );
  }

  public updatePassenger(passenger: Passenger): Observable<Passenger> {
    this.isLoading.next(true);
    return this.http.put<any>(`${this.API_URL}/${passenger.id}`, passenger).pipe(
      tap(() => this.isLoading.next(false)),
      catchError((error: any): any => throwError(error))
    );
  }

  public removePassenger(passenger: Passenger): Observable<any> {
    this.isLoading.next(true);
    return this.http.delete<any>(`${this.API_URL}/${passenger.id}`).pipe(
      tap(() => this.isLoading.next(false)),
      catchError((error: any): any => throwError(error))
    );
  }
}
