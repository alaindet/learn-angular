import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersApiService } from './users-api.service';
import { User } from './../models/user.interface';

@Injectable()
export class UsersService {

  constructor(
    private api: UsersApiService,
  ) {}

  getUsers(): Observable<User[]> {
    return this.api.getUsers();
  }
}
