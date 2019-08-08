import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditsJson, PeopleJson } from '@bridge-interfaces';
import { Credits } from '@models';
import { GetPeopleCreditsSerializer, GetPeopleSerializer } from '@serializers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  constructor(
    private http: HttpClient,
    private getPeopleSerializer: GetPeopleSerializer,
    private getPeopleCreditsSerializer: GetPeopleCreditsSerializer
  ) {}

  get(personId: string) {
    const url = `${environment.apiUrl}/person/${personId}`;
    let params = new HttpParams();
    params = params.append('api_key', environment.apiKey);

    return this.http
      .get(url, { params: params })
      .pipe(map((json: PeopleJson) => this.getPeopleSerializer.from(json)));
  }

  /**
   * Get the movie and TV credits together in a single response.
   * @param personId Person ID
   */
  getCombinedCredits(
    personId: string
  ): Observable<Credits> | Promise<Credits> | Credits {
    const url = `${environment.apiUrl}/person/${personId}/combined_credits`;
    let params = new HttpParams();
    params = params.append('api_key', environment.apiKey);

    return this.http
      .get(url, { params: params })
      .pipe(
        map((json: CreditsJson) => this.getPeopleCreditsSerializer.from(json))
      );
  }
}
