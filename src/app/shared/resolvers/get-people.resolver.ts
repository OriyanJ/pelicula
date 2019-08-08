import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { People } from '@models';
import { Observable } from 'rxjs';
import { PeopleService } from '@services';

@Injectable({ providedIn: 'root' })
export class GetPeopleResolve implements Resolve<People> {
  constructor(private peopleService: PeopleService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<People> | Promise<People> | People {
    return this.peopleService.get(route.paramMap.get('id'));
  }
}
