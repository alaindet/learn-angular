import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {

  @Input() users: User[];
  @Input() count: number;

  constructor(
    private usersService: UsersService
  ) {}

  onSetToActive(id: number): void {
    this.usersService.setActive(id);
  }
}
