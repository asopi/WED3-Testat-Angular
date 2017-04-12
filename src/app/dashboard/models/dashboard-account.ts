import {Account} from "../../auth/models/account";

export class DashboardAccount extends Account {
  constructor(login: string,
              firstname: string,
              lastname: string,
              accountNr: string,
              public amount: number) {
    super(login, firstname, lastname, accountNr);
  }

  public static fromDto(data: any): DashboardAccount {
    return new DashboardAccount(data.owner.login, data.owner.firstname, data.owner.lastname, data.accountNr, data.amount);
  }

  toDto(): any {
    return {
      accountNr: this.accountNr,
      amount: this.amount,
      owner: {
        login: this.login,
        firstname: this.firstname,
        lastname: this.lastname,
        accountNr: this.accountNr
      }
    };
  }
}
