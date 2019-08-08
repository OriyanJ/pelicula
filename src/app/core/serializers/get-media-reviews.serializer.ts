import { Injectable } from '@angular/core';
import { ReviewJson, PaginatedDataJson } from '@bridge-interfaces';
import { ReviewSerializer } from './review-serializer';
import { Review } from '@models';

@Injectable({ providedIn: 'root' })
export class GetMediaReviewsSerializer {
  constructor(private reviewSerializer: ReviewSerializer) {}

  from(json: PaginatedDataJson): Review[] {
    return json.results.map(reviewJson =>
      this.reviewSerializer.from(reviewJson)
    );
  }
}
