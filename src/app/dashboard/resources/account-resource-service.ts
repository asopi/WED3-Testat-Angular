import {Injectable} from '@angular/core';
import {ResourceBase} from "../../auth";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Account} from "../../auth/models/account";
import {Transaction} from "../models/transaction";
import {DashboardAccount} from "../models/dashboard-account";

@Injectable()
export class AccountResourceService extends ResourceBase {

  constructor(http: Http) {
    super(http);
  }

  public getAccount(id?: number): Observable<DashboardAccount> {
    return this.get(`/accounts/${id ? id : ''}`)
      .map((response: Response) => {
        let result = response.json();
        if (result) {
          return DashboardAccount.fromDto(result);
        }
        return null;
      }).catch((error: any) => {
        return Observable.of<DashboardAccount>(null);
      });
  }

  public addTransaction(toAccount: string, amount: number): Observable<Transaction> {
    let url = `/accounts/transactions`;
    let dto = {
      target: toAccount.toString(),
      amount: amount
    };

    return this.post(url, dto)
      .map((response: Response) => {
        let result = response.json();
        return Transaction.fromDto(result);
      })
      .catch((error: any) => {
        return Observable.throw(new Error('Transaction failed'));
      });
  }

  public getTransactions(fromDate: Date, toDate: Date, count?: number, skip?: number): Observable<Transaction[]> {
    let url = `/accounts/transactions?fromDate=${fromDate.toISOString()}&toDate=${toDate.toISOString()}&count=${count}`;
    return this.get(url)
      .map((response: Response) => {
        let body = response.json();
        let transactions: Transaction[] = [];
        body.result.forEach((t: any) => {
          transactions.push(Transaction.fromDto(t));
        });
        return transactions;
      }).catch((error: any) => {
        return Observable.of<Transaction[]>(null);
      });
  }
}
