import { Injectable } from '@angular/core';
import { MediaService } from '@services';
import { BehaviorSubject } from 'rxjs';
import { MediaType } from '@globals';
import { PaginatedData, Movie, Tv } from '@models';

@Injectable({ providedIn: 'root' })
export class HomepageState {
  private readonly _onTv$ = new BehaviorSubject<PaginatedData>(
    new PaginatedData()
  );
  private readonly _inTheaters$ = new BehaviorSubject<PaginatedData>(
    new PaginatedData()
  );

  readonly onTv$ = this._onTv$.asObservable();
  readonly inTheaters$ = this._inTheaters$.asObservable();

  constructor(private mediaService: MediaService) {}

  loadTvShows() {
    const currentTvShows = this._onTv$.getValue();
    if (
      !currentTvShows ||
      !currentTvShows.data ||
      !currentTvShows.data.length
    ) {
      this.mediaService
        .getMediaList(MediaType.TV, 'on_the_air')
        .subscribe(paginated => {
          this._onTv$.next(paginated);
        });
    }
  }

  loadMovies() {
    const movies = this._inTheaters$.getValue();
    if (!movies || !movies.data || !movies.data.length) {
      this.mediaService
        .getMediaList(MediaType.MOVIE, 'now_playing')
        .subscribe(paginated => {
          this._inTheaters$.next(paginated);
        });
    }
  }
}
