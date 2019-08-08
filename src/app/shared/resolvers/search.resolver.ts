import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { PaginatedData } from '@models';
import { SearchService } from '@services';

@Injectable({ providedIn: 'root' })
export class SearchResolver implements Resolve<PaginatedData> {
  constructor(private searchService: SearchService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<PaginatedData> | Promise<PaginatedData> | PaginatedData {
    const query = route.queryParamMap.get('query')
      ? route.queryParamMap.get('query')
      : '';
    if (!query) {
      const paginated = new PaginatedData();
      paginated.data = [];
      paginated.totalResults = 0;
      return paginated;
    }
    return this.searchService.searchMulti(query);
  }
}
