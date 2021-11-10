import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {

  users: User[] = [];

  setActive(id: number): void {
    this.getUser(id).isActive = true;
  }

  setInactive(id: number): void {
    this.getUser(id).isActive = false;
  }

  setUsers(users: User[]): void {
    this.users = users;
  }

  getUser(id: number): User {
    return this.users.find(user => user.id === id);
  }

  getUsers(): User[] {
    return this.users;
  }

  getActiveUsers(): User[] {
    return this.users.filter(user => user.isActive === true);
  }

  getInactiveUsers(): User[] {
    return this.users.filter(user => user.isActive === false);
  }

}
