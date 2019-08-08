import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { MediaService } from '@services';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GetMediaDetailsResolve implements Resolve<any> {
  constructor(private mediaService: MediaService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.mediaService.getDetails(
      route.data.type,
      route.paramMap.get('id')
    );
  }
}
