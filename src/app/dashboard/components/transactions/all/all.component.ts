import {Component, OnDestroy, OnInit} from '@angular/core';
import {Transaction} from "../../../models/transaction";
import {Subscription} from "rxjs";
import {AccountService} from "../../../services/account.service";

@Component({
  selector: 'transaction-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class TransactionAllComponent implements OnInit, OnDestroy {

  readonly startYear = 2015;
  readonly endYear = 2017;

  private years:number[] = [];
  private months:string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  private selectedYear:number = 2017;
  private selectedMonth:number = 0;

  private allTransactions: Transaction[] = [];
  private subscription: Subscription;

  constructor(private accountService: AccountService) {
    this.initYears();
  }

  private initYears(){
    for(let i = this.startYear; i <= this.endYear; i++){
      this.years.push(i);
    }
  }

  ngOnInit() {
    this.subscription = this.accountService.allTransactionChange.subscribe(
      (transition: Transaction[]) => {
        this.allTransactions = transition;
      }
    );
    this.getAllTransaction(new Date(this.selectedYear, this.selectedMonth, 1), new Date(this.selectedYear, this.selectedMonth, 32 - new Date(this.selectedYear, this.selectedMonth, 32).getDate()));
  }

  getAllTransaction(fromDate: Date, toDate: Date){
    this.accountService.getAllTransactions(fromDate, toDate);
  }

  onDateChange(){
    this.getAllTransaction(new Date(this.selectedYear, this.selectedMonth, 1), new Date(this.selectedYear, this.selectedMonth, 32 - new Date(this.selectedYear, this.selectedMonth, 32).getDate()));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
