import { Injectable } from '@angular/core';
import { ReviewJson } from '@bridge-interfaces';
import { Review } from '@models';

@Injectable({ providedIn: 'root' })
export class ReviewSerializer {
  from(json: ReviewJson) {
    const review = new Review();
    review.id = json.id;
    review.author = json.author;
    review.content = json.content;
    review.url = json.url;
    return review;
  }
}
