import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {

  @Input() users: User[];
  @Input() count: number;

  constructor(
    private usersService: UsersService
  ) {}

  onSetToInactive(id: number) {
    this.usersService.setInactive(id);
  }
}
