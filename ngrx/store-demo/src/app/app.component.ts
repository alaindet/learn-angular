import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  counter$: Observable<AppState['counter']>;

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }
}
