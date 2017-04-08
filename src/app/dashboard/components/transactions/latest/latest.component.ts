import {Component, OnDestroy, OnInit} from '@angular/core';
import {Transaction} from "../../../models/transaction";
import {Subscription} from "rxjs";
import {AccountService} from "../../../services/account.service";

@Component({
  selector: 'transaction-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})
export class TransactionLatestComponent implements OnInit, OnDestroy {
  private lastTransactions: Transaction[] = [];
  private subscription: Subscription;

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.subscription = this.accountService.lastTransactionsChange.subscribe(
      (transactions: Transaction[]) => {
        this.lastTransactions = transactions;
      });
    this.getLastTransactions();
  }

  getLastTransactions() {
    this.accountService.getLastTransactions(3);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
