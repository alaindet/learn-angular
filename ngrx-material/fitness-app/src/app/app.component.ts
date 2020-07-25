import { Component } from '@angular/core';

interface Link {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  links: Link[] = [
    {
      path: '/signup',
      label: 'Signup',
      icon: 'account_circle',
    },
    {
      path: '/login',
      label: 'Login',
      icon: 'login',
    },
    {
      path: '/training',
      label: 'Training',
      icon: 'fitness_center',
    }
  ];
}
