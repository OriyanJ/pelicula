import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Videos } from '@models';
import { MediaService } from '@services';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GetMediaVideosResolve implements Resolve<Videos> {
  constructor(private mediaService: MediaService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Videos> | Promise<Videos> | Videos {
    return this.mediaService.getVideos(
      route.data.type,
      route.paramMap.get('id')
    );
  }
}
