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

  products$: Observable<AppState['products']>;

  constructor(
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.products$ = this.store.select('products');
  }

  onRemoveProduct(id: number): void {
    this.store.dispatch({
      type: 'REMOVE',
      payload: id,
    });
  }

  onAddProduct(): void {
    this.store.dispatch({
      type: 'ADD',
      payload: { id: Date.now(), name: 'Foo' },
    });
  }
}
