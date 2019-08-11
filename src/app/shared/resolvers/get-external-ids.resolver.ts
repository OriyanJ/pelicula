import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { ExternalIds } from '@models';
import { MediaService } from '@services';

@Injectable({ providedIn: 'root' })
export class GetExternalIdsResolve implements Resolve<ExternalIds> {
  constructor(private mediaService: MediaService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ExternalIds> | Promise<ExternalIds> | ExternalIds {
    return this.mediaService.getExternalIds(
      route.data.type,
      route.paramMap.get('id')
    );
  }
}
