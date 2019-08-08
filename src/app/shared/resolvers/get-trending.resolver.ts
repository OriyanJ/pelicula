import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { TrendingService, MediaService } from '@services';
import { forkJoin, merge, of } from 'rxjs';
import { MediaType } from '@globals';
import { switchMap } from 'rxjs/operators';
import { PaginatedData } from '@models';

@Injectable({ providedIn: 'root' })
export class GetTrendingResolve implements Resolve<any> {
  constructor(
    private trendingService: TrendingService,
    private mediaService: MediaService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const trendingMovies$ = this.mediaService.getMediaList(
      MediaType.MOVIE,
      'now_playing'
    );
    const trendingTv$ = this.mediaService.getMediaList(
      MediaType.TV,
      'on_the_air'
    );

    // Take the forked Observables and transform it to an object
    const mergeCategories = switchMap((forked: PaginatedData[]) =>
      of({
        movies: forked[0],
        tv: forked[1]
      })
    );

    return forkJoin([trendingMovies$, trendingTv$]).pipe(mergeCategories);
  }
}
