import {Injectable, EventEmitter} from '@angular/core';
import {AccountResourceService} from "../resources/account-resource-service";
import {Observable} from "rxjs";
import {Transaction} from "../models/transaction";
import {ExtendedAccount} from "../models/extended-account";

@Injectable()
export class AccountService {

  public lastTransactionsChange: EventEmitter<Transaction[]> = new EventEmitter<Transaction[]>();
  private lastTransactions: Transaction[] = null;

  public allTransactionChange: EventEmitter<Transaction[]> = new EventEmitter<Transaction[]>();
  private allTransactions: Transaction[] = null;

  constructor(private accountResource: AccountResourceService) {
  }

  public getAccount(id?: number): Observable<ExtendedAccount> {
    return this.accountResource.getAccount(id);
  }

  public addTransaction(toAccount: string, amount: number): Observable<boolean> {
    return this.accountResource.addTransaction(toAccount, amount)
      .map((transaction: Transaction) => {
        this.getLastTransactions();
        return true;
      })
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }

  public getLastTransactions(count = 3): void {
    this.accountResource.getTransactions(new Date('2015-01-01'), new Date(), count, 0)
      .subscribe(
        (transactions: Transaction[]) => {
          this.lastTransactions = transactions;
          this.lastTransactionsChange.emit(this.lastTransactions);
        });
  }

  public getAllTransactions(fromDate: Date, toDate: Date): void {
    /*
     * - Wieso gibt es hier eine subscribe?
     * */
    this.accountResource.getTransactions(fromDate, toDate)
      .subscribe(
        (transactions: Transaction[]) => {
          this.allTransactions = transactions;
          this.allTransactionChange.emit(this.allTransactions);
        });
  }

}
