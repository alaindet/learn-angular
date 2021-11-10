import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html'
})
export class ErrorPageComponent implements OnInit, OnDestroy {

  message: string;
  dataSubscription: Subscription;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dataSubscription = this.route.data.subscribe(
      (data: Data) => this.message = data.message
    );
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
