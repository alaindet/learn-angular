import { UsersCounterService } from './shared/services/users-counter.service';
import { UsersService } from './shared/services/users.service';
import { Component } from '@angular/core';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, UsersCounterService]
})
export class AppComponent {

  constructor(
    private usersService: UsersService,
    private usersCounterService: UsersCounterService
  ) {

    this.usersService.setUsers([
      { id: 1, name: 'Max', isActive: true },
      { id: 2, name: 'Anna', isActive: true },
      { id: 3, name: 'Chris', isActive: false },
      { id: 4, name: 'Manu', isActive: false }
    ]);

  }

  get usersCount(): number {
    return this.usersCounterService.countUsers();
  }

  get activeUsers(): User[] {
    return this.usersService.getActiveUsers();
  }

  get activeUsersCount(): number {
    return this.usersCounterService.countActiveUsers();
  }

  get inactiveUsers(): User[] {
    return this.usersService.getInactiveUsers();
  }

  get inactiveUsersCount(): number {
    return this.usersCounterService.countInactiveUsers();
  }

  onSetUserToInactive(id: number) {
    this.usersService.setInactive(id);
  }

  onSetUserToActive(id: number) {
    this.usersService.setActive(id);
  }
}
