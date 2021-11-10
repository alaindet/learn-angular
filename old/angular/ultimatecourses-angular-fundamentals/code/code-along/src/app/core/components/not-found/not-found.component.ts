import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  styles: [''],
  template: `
    <div>
      Page not found, <a routerLink="/">go home?</a>
    </div>
  `
})
export class NotFoundComponent { }
