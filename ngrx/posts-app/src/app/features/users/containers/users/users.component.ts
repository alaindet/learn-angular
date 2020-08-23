import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiCoreService } from 'src/app/core/services/ui.service';
import { UsersService } from './../../services/users.service';
import { User } from './../../models/user.interface';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersContainerComponent implements OnInit, OnDestroy {

  users: User[] = [];
  subs: { [sub: string]: Subscription } = {};

  constructor(
    public ui: UiCoreService,
    private usersService: UsersService,
  ) {}

  ngOnInit() {
    this.ui.setLoading(true);
    this.subs.users = this.usersService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
        this.ui.setLoading(false);
      })
  }

  ngOnDestroy() {
    for (const sub of Object.values(this.subs)) {
      sub.unsubscribe();
    }
  }

  onShowUser(index: number) {
    console.log('onShowUser', index);
  }
}
