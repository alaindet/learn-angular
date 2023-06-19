import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { NavbarComponent } from './core/navbar';
import { Firestore, collectionData, collection, DocumentData } from '@angular/fire/firestore';

const imports = [
  RouterLink,
  RouterOutlet,
  NavbarComponent,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  firestore = inject(Firestore);

  ngOnInit() {
    const itemCollection = collection(this.firestore, 'items');
    const itemData = collectionData(itemCollection);

    itemData.subscribe(items => {
      items.forEach(item => {
        console.log(item);
      });
    });
  }
}
