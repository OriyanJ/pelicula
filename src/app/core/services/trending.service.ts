import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginatedDataJson } from '@bridge-interfaces';
import { MediaType } from '@globals';
import { PaginatedMediaSerializer } from '@serializers';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export enum TimeWindow {
  DAY = 'day',
  WEEK = 'week'
}

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  constructor(
    private http: HttpClient,
    private paginatedMediaSerializer: PaginatedMediaSerializer
  ) {}

  getTrending(
    mediaType: MediaType = MediaType.MOVIE,
    timeWindow: TimeWindow = TimeWindow.WEEK
  ) {
    const url = `${environment.apiUrl}/trending/${mediaType}/${timeWindow}`;
    return this.http
      .get(url)
      .pipe(
        map((paginated: PaginatedDataJson) =>
          this.paginatedMediaSerializer.from(paginated, mediaType)
        )
      );
  }
}
