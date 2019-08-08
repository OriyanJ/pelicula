import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginatedDataJson } from '@bridge-interfaces';
import { PaginatedData } from '@models';
import { SearchMultiSerializer } from '@serializers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(
    private http: HttpClient,
    private searchMultiSerializer: SearchMultiSerializer
  ) {}

  /**
   * Search multiple models in a single request. Multi search currently supports
   * searching for movies, tv shows and people in a single request.
   */
  searchMulti(query: string): Observable<PaginatedData> {
    const url = `${environment.apiUrl}/search/multi`;
    let params = new HttpParams();
    params = params.append('query', query);

    return this.http
      .get(url, { params: params })
      .pipe(
        map((json: PaginatedDataJson) => this.searchMultiSerializer.from(json))
      );
  }
}
