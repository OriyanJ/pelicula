import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Credits } from '@models';
import { MediaService } from '@services';

@Injectable({ providedIn: 'root' })
export class GetMediaCreditsResolve implements Resolve<Credits> {
  constructor(private mediaService: MediaService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.mediaService.getCredits(
      route.data.type,
      route.paramMap.get('id')
    );
  }
}
