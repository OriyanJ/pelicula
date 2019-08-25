import { Account } from '@models';
import { AccountActions, AccountActionTypes } from './account.actions';

const initialState: Account = new Account();

export function AccountReducer(
  state: Account = initialState,
  action: AccountActions
) {
  switch (action.type) {
    case AccountActionTypes.LOGIN_START:
      return state;

    default:
      return state;
  }
}
