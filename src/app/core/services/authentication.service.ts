import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateSessionWithTokenSerializer } from '@serializers';
import { map } from 'rxjs/operators';
import { RequestTokenJson } from '@bridge-interfaces';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private createSessionWithLoginSerializer: CreateSessionWithTokenSerializer
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
    return this.http.post(url, body);
  }
}
