import { LoggingService } from './../../shared/services/logging.service';
import { Account } from '../models/account.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountsService {

  statusUpdated = new EventEmitter<string>();

  private accounts: Account[] = [

    // Test accounts
    { name: 'Master Account', status: 'active' },
    { name: 'Test Account', status: 'inactive' },
    { name: 'Hidden Account', status: 'hidden' }

  ];

  constructor(
    private loggingService: LoggingService
  ) {}

  getAccounts(): Account[] {
    return this.accounts;
  }

  addAccount(account: Account): void {
    this.accounts.unshift(account);
    // const message = `A new account was added, status is: ${account.status}`;
    // this.loggingService.log(message);
  }

  updateStatus(id: number, status: string): void {
    const account = this.accounts[id];
    account.status = status;
    // this.loggingService.log(
    //   `Status of account ${ account.name } (#${ +id + 1 }) ` +
    //   `was updated to ${ account.status }`
    // );
  }

}
