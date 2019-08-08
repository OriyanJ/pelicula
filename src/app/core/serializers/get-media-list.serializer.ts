import { Injectable } from '@angular/core';
import { PaginatedDataJson, MovieJson, TvJson } from '@bridge-interfaces';
import { PaginatedData } from '@models';
import { MediaSerializer } from './media.serializer';

@Injectable({ providedIn: 'root' })
export class GetMediaListSerializer {
  constructor(private mediaSerializer: MediaSerializer) {}

  from(json: PaginatedDataJson, type: string): PaginatedData {
    const paginated = new PaginatedData();
    paginated.data = this.serializeMedia(json.results, type);
    paginated.page = json.page;
    paginated.totalPages = json.total_pages;
    paginated.totalResults = json.total_results;

    if (json.id) {
      paginated.id = json.id;
    }
    return paginated;
  }

  private serializeMedia(results: MovieJson[] | TvJson[], type: string) {
    return (<[]>results).map(json => this.mediaSerializer.from(json, type));
  }
}
