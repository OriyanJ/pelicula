import { Injectable } from '@angular/core';
import { PaginatedDataJson } from '@bridge-interfaces';
import { PaginatedData } from '@models';

@Injectable({ providedIn: 'root' })
export class PaginatedDataSerializer {
  from(json: PaginatedDataJson): PaginatedData {
    const paginated = new PaginatedData();
    paginated.data = json.results;
    paginated.page = json.page;
    paginated.totalPages = json.total_pages;
    paginated.totalResults = json.total_results;

    if (json.id) {
      paginated.id = json.id;
    }

    return paginated;
  }
}
