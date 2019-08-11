import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditsJson } from '@bridge-interfaces';
import { GetMediaCreditsSerializer } from '@serializers';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TvSeasonsService {
  constructor(
    private http: HttpClient,
    private getMediaCreditsSerializer: GetMediaCreditsSerializer
  ) {}

  /**
   * Get the credits for TV season.
   * @param id TV show ID
   * @param seasonNumber Season number
   */
  getCredits(id: string, seasonNumber: number) {
    const url = `${environment.apiUrl}/tv/${id}/season/${seasonNumber}/credits`;

    return this.http
      .get(url)
      .pipe(
        map((json: CreditsJson) => this.getMediaCreditsSerializer.from(json))
      );
  }
}
