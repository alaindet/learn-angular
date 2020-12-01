// import { EventEmitter, Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UsersService {

  // activatedEmitter = new EventEmitter<boolean>();
  activatedSubject = new Subject<boolean>();

}
