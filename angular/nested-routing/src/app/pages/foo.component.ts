import { Component } from '@angular/core';

@Component({
  template: `
    <p>This is the foo page</p>
    <div [ngStyle]="{
      padding: '1rem',
      border: '2px dashed blue'
    }">
      <router-outlet></router-outlet>
    </div>
  `
})
export class FooComponent {}
