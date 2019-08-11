import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CreditsJson,
  KeywordsJson,
  MovieJson,
  PaginatedDataJson,
  TvJson,
  VideosJson,
  ExternalIdsJson
} from '@bridge-interfaces';
import { Keyword, PaginatedData, Review, ExternalIds } from '@models';
import {
  GetExternalIdsSerializer,
  GetMediaCreditsSerializer,
  GetMediaKeywordsSerializer,
  GetMediaListSerializer,
  GetMediaReviewsSerializer,
  GetMediaVideosSerializer,
  MediaSerializer
} from '@serializers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MediaService {
  constructor(
    private http: HttpClient,
    private mediaSerializer: MediaSerializer,
    private getMediaListSerializer: GetMediaListSerializer,
    private getMediaCreditsSerializer: GetMediaCreditsSerializer,
    private getMediaReviewsSerializer: GetMediaReviewsSerializer,
    private getMediaKeywordsSerializer: GetMediaKeywordsSerializer,
    private getMediaVideosSeralizer: GetMediaVideosSerializer,
    private getExternalIdsSerializer: GetExternalIdsSerializer
  ) {}

  /**
   * Get media's details.
   * @param type Media's type (`movie`, `tv`)
   * @param id Media's ID
   */
  getDetails(type: string, id: string) {
    const url = `${environment.apiUrl}/${type}/${id}`;

    return this.http
      .get(url)
      .pipe(
        map((response: MovieJson | TvJson) =>
          this.mediaSerializer.from(response, type)
        )
      );
  }

  getMediaList(
    type: string,
    list: string,
    page: number = 1
  ): Observable<PaginatedData> {
    const url = `${environment.apiUrl}/${type}/${list}`;
    let params = new HttpParams();
    params = params.append('region', 'US');
    params = params.append('page', page.toString());

    return this.http.get(url, { params: params }).pipe(
      map((json: PaginatedDataJson) => {
        return this.getMediaListSerializer.from(json, type);
      })
    );
  }

  /**
   * Get media's credits
   * @param type Media type
   * @param id Media's ID
   */
  getCredits(type: string, id: string) {
    const url = `${environment.apiUrl}/${type}/${id}/credits`;

    return this.http
      .get(url)
      .pipe(
        map((json: CreditsJson) => this.getMediaCreditsSerializer.from(json))
      );
  }

  getReviews(type: string, id: string, page: number = 1): Observable<Review[]> {
    const url = `${environment.apiUrl}/${type}/${id}/reviews`;
    let params = new HttpParams();
    params = params.append('page', page.toString());

    return this.http
      .get(url)
      .pipe(
        map((json: PaginatedDataJson) =>
          this.getMediaReviewsSerializer.from(json)
        )
      );
  }

  getKeywords(type: string, id: string): Observable<Keyword[]> {
    const url = `${environment.apiUrl}/${type}/${id}/keywords`;

    return this.http
      .get(url)
      .pipe(
        map((json: KeywordsJson) =>
          this.getMediaKeywordsSerializer.from(json, type)
        )
      );
  }

  /**
   * Get the videos that have been added to a TV show or a movie.
   */
  getVideos(type: string, id: string) {
    const url = `${environment.apiUrl}/${type}/${id}/videos`;

    return this.http
      .get(url)
      .pipe(map((json: VideosJson) => this.getMediaVideosSeralizer.from(json)));
  }

  /**
   * Get the list of media recommendations for this item.
   */
  getRecommendations(type: string, id: string) {
    const url = `${environment.apiUrl}/${type}/${id}/recommendations`;

    return this.http
      .get(url)
      .pipe(
        map((json: PaginatedDataJson) =>
          this.getMediaListSerializer.from(json, type)
        )
      );
  }

  getExternalIds(
    type: string,
    id: string
  ): Observable<ExternalIds> | Promise<ExternalIds> | ExternalIds {
    const url = `${environment.apiUrl}/${type}/${id}/external_ids`;

    return this.http
      .get(url)
      .pipe(
        map((json: ExternalIdsJson) => this.getExternalIdsSerializer.from(json))
      );
  }
}
