import { Component } from '@angular/core';

import { LINKS } from 'src/app/core/data/links.data';
import { Link } from 'src/app/core/models/link.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  links: Link[] = LINKS;
}
