import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Account } from '@models';

@Injectable({ providedIn: 'root' })
export class AccountState {
  private readonly _sessionId: BehaviorSubject<Account> = new BehaviorSubject<
    Account
  >(null);
  readonly sessionId = this._sessionId.asObservable();

  setState(account: Account) {
    this._sessionId.next(account);
  }
}
