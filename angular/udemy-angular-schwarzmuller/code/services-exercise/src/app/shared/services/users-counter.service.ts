import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UsersCounterService {

  constructor(
    private usersService: UsersService
  ) {}

  private count(users: User[]): number {
    return users ? users.length : 0;
  }

  countUsers(): number {
    return this.count(this.usersService.getUsers());
  }

  countInactiveUsers(): number {
    return this.count(this.usersService.getInactiveUsers());
  }

  countActiveUsers(): number {
    return this.count(this.usersService.getActiveUsers());
  }

}
