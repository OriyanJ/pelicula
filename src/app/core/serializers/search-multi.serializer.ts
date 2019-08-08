import { Injectable } from '@angular/core';
import { PaginatedDataJson, TvJson, MovieJson } from '@bridge-interfaces';
import { MediaSerializer } from './media.serializer';
import { PaginatedData } from '@models';
import { PeopleCrewSerializer } from './people-crew-serializer';
import { PaginatedDataSerializer } from './paginated-data.serializer';

@Injectable({ providedIn: 'root' })
export class SearchMultiSerializer {
  constructor(
    private mediaSerializer: MediaSerializer,
    private peopleSerializer: PeopleCrewSerializer,
    private paginatedDataSerializer: PaginatedDataSerializer
  ) {}

  from(json: PaginatedDataJson) {
    json.results = json.results.map((result: { media_type: string }) => {
      switch (result.media_type) {
        case 'movie':
        case 'tv':
          return this.mediaSerializer.from(
            (<unknown>result) as MovieJson | TvJson,
            result.media_type
          );
        case 'person':
          return this.peopleSerializer.from(result);
        default:
          return null;
      }
    });
    return this.paginatedDataSerializer.from(json);
  }
}
