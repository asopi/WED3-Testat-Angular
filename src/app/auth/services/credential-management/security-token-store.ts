import {Injectable} from '@angular/core';

@Injectable()
export class SecurityTokenStore {
  private token: SecurityToken;

  constructor() {
    this.token = JSON.parse(window.localStorage.getItem("key"));
  }

  public get storedValue(): SecurityToken {
    return this.token;
  }

  public set storedValue(value: SecurityToken) {
    this.token = value;
    window.localStorage.setItem("key", value ? JSON.stringify(value) : null);
  }
}

export interface SecurityToken {
  token: string,
  owner: any
}
