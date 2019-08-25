import { Injectable } from '@angular/core';
import { AccountJson } from '@bridge-interfaces';
import { Account } from '@models';

@Injectable({ providedIn: 'root' })
export class GetAccountSerializer {
  from(json: AccountJson) {
    const account = new Account();
    if (json.avatar) {
      account.avatar = json.avatar;
    }
    if (json.name) {
      account.name = json.name;
    }
    if (json.username) {
      account.username = json.username;
    }
    return account;
  }
}
