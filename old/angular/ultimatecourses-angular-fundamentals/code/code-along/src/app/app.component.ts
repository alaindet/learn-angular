import { Component } from '@angular/core';

interface NavLink {
  url: string;
  label: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public nav: NavLink[] = [
    {
      url: '/',
      label: 'Home',
      exact: true,
    },
    {
      url: '/oops',
      label: '404',
      exact: true,
    },
    {
      url: '/passengers',
      label: 'Passengers',
      exact: true,
    }
  ];

}
