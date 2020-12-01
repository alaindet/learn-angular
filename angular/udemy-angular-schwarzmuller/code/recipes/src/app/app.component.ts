import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyCSSwJRA6ST0DoivTSNc5mXeq86O1c1etQ',
      authDomain: 'alaindet-udemy-angular-recipes.firebaseapp.com'
    });
  }

}
