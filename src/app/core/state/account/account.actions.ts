import { Account } from '@models';
import { Action } from '@ngrx/store';

export enum AccountActionTypes {
  LOGIN_START = '[Login] Login Start'
}

export class LoginStart implements Action {
  readonly type = AccountActionTypes.LOGIN_START;

  constructor(public payload: Account) {}
}

export type AccountActions = LoginStart;
