import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersApiService } from './users-api.service';

@Injectable()
export class UsersService {

  constructor(
    private api: UsersApiService,
  ) {}

  getUsers(): Observable<User[]> {
    return this.api.getUsers();
  }
}
