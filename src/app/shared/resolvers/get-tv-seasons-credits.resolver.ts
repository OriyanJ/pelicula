import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Credits, MediaCast, MediaCrew, Tv } from '@models';
import { MediaService, TvSeasonsService } from '@services';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GetTvSeasonsResolve implements Resolve<Credits> {
  mappedCast = {};
  mappedCrew = {};
  constructor(
    private mediaService: MediaService,
    private tvSeasonsService: TvSeasonsService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Credits> | Promise<Credits> | Credits {
    return this.mediaService
      .getDetails(route.data.type, route.paramMap.get('id'))
      .pipe(
        switchMap((media: Tv) => this.getEntireSeasonCredits(media)),
        map((entireCredits: Credits[]) => this.mapCredits(entireCredits))
      );
  }

  /**
   * Get entire credits for all of a TV show seasons.
   */
  private getEntireSeasonCredits(media: Tv) {
    const forked = [];
    for (let i = 1; i < media.totalSeasons + 1; i++) {
      // For each season, create an Observable for season credits
      forked.push(this.tvSeasonsService.getCredits(media.id.toString(), i));
    }
    return forkJoin(forked);
  }

  private mapCredits(entireCredits: Credits[]) {
    const credits = new Credits();
    credits.cast = [];
    credits.crew = [];

    for (const seasonCredits of entireCredits) {
      const seasonCast = this.mapSeasonCredits(seasonCredits.cast, 'cast');
      const seasonCrew = this.mapSeasonCredits(seasonCredits.crew, 'crew');
      credits.cast = [...credits.cast, ...seasonCast];
      credits.crew = [...credits.crew, ...seasonCrew];
    }
    return credits;
  }

  /**
   * Maps a sesaon credits by reducing duplications. If a credit already exists
   * on a different season, then filter it out.
   *
   * @param credits Season credits
   * @param type The type of credits, either cast or crew
   */
  mapSeasonCredits(credits: Array<MediaCast | MediaCrew>, type: string) {
    const mapped = type === 'cast' ? this.mappedCast : this.mappedCrew;
    return credits
      .map((credit: MediaCrew | MediaCast) => {
        if (mapped[credit.id]) {
          return null;
        }
        mapped[credit.id] = credit;
        return credit;
      })
      .filter((credit: MediaCrew | MediaCast) => !!credit);
  }
}
