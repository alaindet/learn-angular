import { Subscription } from 'rxjs';
import { UsersService } from './users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  userActivated = false;
  usersSub: Subscription;

  constructor(
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.usersSub = this.usersService.activatedSubject.subscribe(
      didActivate => {
        this.userActivated = didActivate;
      }
    );
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
  }
}
