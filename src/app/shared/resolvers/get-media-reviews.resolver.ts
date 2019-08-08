import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { MediaService } from '@services';

@Injectable({ providedIn: 'root' })
export class GetMediaReviewsResolve implements Resolve<any> {
  constructor(private mediaService: MediaService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.mediaService.getReviews(
      route.data.type,
      route.paramMap.get('id')
    );
  }
}
