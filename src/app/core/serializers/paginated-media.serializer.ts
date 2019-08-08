import { Injectable } from '@angular/core';
import { PaginatedDataJson } from '@bridge-interfaces';

import { MediaSerializer } from './media.serializer';
import { PaginatedDataSerializer } from './paginated-data.serializer';
import { MediaType } from '@globals';

@Injectable({ providedIn: 'root' })
export class PaginatedMediaSerializer {
  constructor(
    private paginatedDataSerializer: PaginatedDataSerializer,
    private mediaSerializer: MediaSerializer
  ) {}

  from(json: PaginatedDataJson, mediaType?: MediaType) {
    json.results = this.serializerResults(json.results, mediaType);
    return this.paginatedDataSerializer.from(json);
  }

  private serializerResults(results: any[], mediaType?: MediaType) {
    return results.map((result: any) =>
      this.mediaSerializer.from(result, mediaType)
    );
  }
}
