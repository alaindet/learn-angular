import { Account } from './../shared/models/account.model';
import { AccountsService } from './../shared/services/accounts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {

  constructor(
    private accountsService: AccountsService
  ) {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => {
        console.log('subscribe() from NewAccountComponent', status);
      }
    );
  }

  onCreateAccount(account: Account): void {
    this.accountsService.addAccount(account);
  }
}
