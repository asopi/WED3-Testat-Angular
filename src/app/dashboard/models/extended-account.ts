import {Account} from "../../auth/models/account";

export class ExtendedAccount extends Account {
  constructor(login: string,
              firstname: string,
              lastname: string,
              accountNr: string,
              public amount: number) {
    super(login, firstname, lastname, accountNr);
  }

  public static fromDto(data: any): ExtendedAccount {
    return new ExtendedAccount(data.owner.login, data.owner.firstname, data.owner.lastname, data.accountNr, data.amount);
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
