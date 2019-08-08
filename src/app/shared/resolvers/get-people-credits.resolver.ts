import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Credits } from '@models';
import { PeopleService } from '@services';

@Injectable({ providedIn: 'root' })
export class GetPeopleCreditsResolve implements Resolve<Credits> {
  constructor(private peopleService: PeopleService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Credits> | Promise<Credits> | Credits {
    return this.peopleService.getCombinedCredits(route.paramMap.get('id'));
  }
}
