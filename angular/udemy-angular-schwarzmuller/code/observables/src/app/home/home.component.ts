import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  sub2: Subscription;

  constructor() { }

  ngOnInit() {
    // this.createCustomObservable1();
    // this.createCustomObservable2();
  }

  ngOnDestroy() {
    if (this.sub1) { this.sub1.unsubscribe(); }
    if (this.sub2) { this.sub2.unsubscribe(); }
  }

  createCustomObservable1(): void {

    // Create
    const myObservable1 = interval(1000).pipe(
      // My first observable operator
      map(
        (seconds: number) => `${seconds} second(s)`
      )
    );

    // Subscribe
    this.sub1 = myObservable1.subscribe(
      (num: string) => {
        console.log(num);
      }
    );

  }

  createCustomObservable2(): void {

    const myObservable2 = Observable.create((observer: Observer<string>) => {

      // Emit a data package after 1 second
      setTimeout(() => {
        observer.next('first package');
      }, 1000);

      // Emit a data package after 2 seconds
      setTimeout(() => {
        observer.next('second package');
      }, 2000);

      // // Emit an error after 3 seconds (stops!)
      // setTimeout(() => {
      //   observer.error('this does not work');
      // }, 3000);

      // Emit completion after 4 seconds
      setTimeout(() => {
        observer.complete();
      }, 4000);

      // Emit a data package after 5 seconds
      setTimeout(() => {
        observer.next('third package');
      }, 5000);

    });

    this.sub2 = myObservable2.subscribe(
      (data: string) => { console.log(data); }, // For data packages
      (error: string) => { console.log(error); }, // For errors
      () => { console.log('completed'); }
    );

  }

}
