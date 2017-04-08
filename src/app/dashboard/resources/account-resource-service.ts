import {Injectable} from '@angular/core';
import {ResourceBase} from "../../auth";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Account} from "../../auth/models/account";
import {Transaction} from "../models/transaction";
import {ExtendedAccount} from "../models/extended-account";

@Injectable()
export class AccountResourceService extends ResourceBase {

  constructor(http: Http) {
    super(http);
  }

  public getAccount(id?: number): Observable<ExtendedAccount> {
    return this.get(`/accounts/${id ? id : ''}`)
      .map((response: Response) => {
        let result = response.json();
        if (result) {
          return ExtendedAccount.fromDto(result);
        }
        return null;
      }).catch((error: any) => {
        return Observable.of<ExtendedAccount>(null);
      });
  }

  public addTransaction(toAccount: string, amount: number): Observable<Transaction> {
    let url = `/accounts/transactions`;
    let dto = {
      target: toAccount.toString(),
      amount: amount
    };
    /*
     * - Wie weiss die Server von welchem Account die Geld abgehoben werden soll?
     * - Wieso wird hier eine .map() verwendet anstatt einer subscribe?
     * */
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
    // TODO filter parameters
    //accounts/transactions?fromDate=2016-05-11T02:00:00.000Z&toDate=2016-12-11T02:00:00.000Z&count=4
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
