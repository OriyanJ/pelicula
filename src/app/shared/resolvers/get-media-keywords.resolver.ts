import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Keyword } from '@models';
import { MediaService } from '@services';

@Injectable({ providedIn: 'root' })
export class GetMediaKeywordsResolve implements Resolve<Keyword[]> {
  constructor(private mediaService: MediaService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Keyword[]> | Promise<Keyword[]> | Keyword[] {
    return this.mediaService.getKeywords(
      route.data.type,
      route.paramMap.get('id')
    );
  }
}
