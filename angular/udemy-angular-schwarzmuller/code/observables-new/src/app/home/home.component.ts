import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private intervalSub: Subscription;

  constructor() { }

  ngOnInit(): void {

    // const customIntervalObservable = interval(1000);

    const customIntervalObservable = Observable.create(
      observer => {
        let count = 0;
        const timeInterval = 1000;
        setInterval(
          () => {
            observer.next(count);
            count = count + 1;

            // Complete
            if (count === 2) {
              observer.complete();
            }

            // ERROR (Never happens!)
            if (count > 3) {
              observer.error(new Error('Count is greater than 3!'));
            }

          },
          timeInterval
        );
      }
    );

    customIntervalObservable.pipe(
      map(
        (data: number) => `Seconds elapsed: ${data}`
      )
    );

    this.intervalSub = customIntervalObservable
      .pipe(
        filter((data: number) => data > 0 && data < 10),
        map((data: number) => `Seconds elapsed: ${data}`)
      )
      .subscribe(

        // Next (regular data)
        (next: string) => {
          console.log(next);
        },

        // Error
        (error: Error) => {
          alert('CUSTOM ERROR: ' + error.message);
          console.log('CUSTOM ERROR', error.message);
        },

        // Complete
        () => {
          console.log('Observable complete');
        }
    );
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

}
