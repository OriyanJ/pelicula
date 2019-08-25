import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  CreateSessionWithTokenSerializer,
  CreateSessionSerializer
} from '@serializers';
import { map, tap, switchMap } from 'rxjs/operators';
import { RequestTokenJson, SessionJson } from '@bridge-interfaces';
import { AccountState } from '../state/account-state.service';
import { Session, Account } from '@models';
import { AccountService } from './account.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private accountState: AccountState,
    private accountService: AccountService,
    private createSessionWithLoginSerializer: CreateSessionWithTokenSerializer,
    private createSessionSerializer: CreateSessionSerializer
  ) {}

  createRequestToken() {
    const url = `${environment.apiUrl}/authentication/token/new`;
    return this.http
      .get(url)
      .pipe(
        map((json: RequestTokenJson) =>
          this.createSessionWithLoginSerializer.from(json)
        )
      );
  }

  createSessionWithLogin(token: string, username: string, password: string) {
    const body = {
      username: username,
      password: password,
      request_token: token
    };
    const url = `${
      environment.apiUrl
    }/authentication/token/validate_with_login?api_key=${environment.apiKey}`;
    return this.http
      .post(url, body)
      .pipe(
        map((json: RequestTokenJson) =>
          this.createSessionWithLoginSerializer.from(json)
        )
      );
  }

  createSession(requestToken: string) {
    const body = {
      request_token: requestToken
    };

    const url = `${environment.apiUrl}/authentication/session/new?api_key=${
      environment.apiKey
    }`;
    return this.http.post(url, body).pipe(
      map((response: SessionJson) =>
        this.createSessionSerializer.from(response)
      ),
      switchMap((session: Session) =>
        this.accountService.getDetails(session.sessionId)
      ),
      tap((account: Account) => {
        this.accountState.setState(account);
      })
    );
  }
}
