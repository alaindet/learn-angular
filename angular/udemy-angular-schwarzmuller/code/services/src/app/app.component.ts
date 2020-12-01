import { Account } from './shared/models/account.model';
import { AccountsService } from './shared/services/accounts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  accounts: Account[] = [];

  constructor(
    private accountsService: AccountsService
  ) {
    this.accounts = this.accountsService.getAccounts();
  }

}
