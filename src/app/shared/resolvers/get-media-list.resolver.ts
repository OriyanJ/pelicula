import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Movie, Tv } from '@models';
import { MediaService } from '@services';

@Injectable({ providedIn: 'root' })
export class GetMediaListResolve implements Resolve<Movie[] | Tv[]> {
  constructor(private mediaService: MediaService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const page = route.queryParamMap.get('page')
      ? ((<unknown>route.queryParamMap.get('page')) as number)
      : 1;

    return this.mediaService.getMediaList(
      route.parent.data.type,
      route.data.list,
      page
    );
  }
}
