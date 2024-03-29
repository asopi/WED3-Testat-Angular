import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AccountService} from "../../services/account.service";
import {DashboardAccount} from "../../models/dashboard-account";

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  private myAccount: DashboardAccount;
  public targetAccount: DashboardAccount;

  public toAccount: string;
  public amount: number;

  public paymentDone = false;
  public paymentResult:string;


  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.updateAccount();
  }

  private updateAccount(){
    this.accountService.getAccount()
      .subscribe(
        (extendedAccount: DashboardAccount) => {
          this.myAccount = extendedAccount;
        }
      );
  }

  public pay(payForm: NgForm): boolean {
    if (payForm.form.valid && this.targetAccount) {
      this.accountService.addTransaction(this.toAccount, this.amount)
        .subscribe(
          (result: boolean) => {
            this.updateAccount();
            this.paymentDone = true;
          },
          (error: any) => this.paymentResult = error.message
        );
    }
    return false;
  }

  public onTargetAccountChange() {
    if (this.toAccount) {
      this.accountService.getAccount(parseInt(this.toAccount, 10))
        .subscribe(
          (account: DashboardAccount) => this.targetAccount = account
        );
    }
  }

  public reset(){
    this.paymentDone = false;
    this.toAccount = "";
    this.amount = 0;
    this.targetAccount = null;
  }
}
