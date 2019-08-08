import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { PaginatedData } from '@models';
import { MediaService } from '@services';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GetMediaRecommendationsResolve implements Resolve<any[]> {
  constructor(private mediaService: MediaService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any[]> | Promise<any[]> | any[] {
    return this.mediaService
      .getRecommendations(route.data.type, route.paramMap.get('id'))
      .pipe(
        map((paginatedData: PaginatedData) => {
          return paginatedData.data;
        })
      );
  }
}
