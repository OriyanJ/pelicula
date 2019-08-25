import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountJson } from '@bridge-interfaces';
import { GetAccountSerializer } from '@serializers';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountService {
  constructor(
    private http: HttpClient,
    private getAccountSerializer: GetAccountSerializer
  ) {}

  getDetails(sessionId: string) {
    let params = new HttpParams();
    params = params.append('session_id', sessionId);
    const url = `${environment.apiUrl}/account`;
    return this.http
      .get(url, { params: params })
      .pipe(map((json: AccountJson) => this.getAccountSerializer.from(json)));
  }
}
