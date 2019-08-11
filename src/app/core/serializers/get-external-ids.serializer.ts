import { Injectable } from '@angular/core';
import { ExternalIdsJson } from '@bridge-interfaces';
import { ExternalIds } from '@models';

@Injectable({ providedIn: 'root' })
export class GetExternalIdsSerializer {
  from(json: ExternalIdsJson) {
    const ids = new ExternalIds();
    if (json.facebook_id) {
      ids.facebook = json.facebook_id;
    }
    if (json.id) {
      ids.id = json.id;
    }
    if (json.imdb_id) {
      ids.imdb = json.imdb_id;
    }
    if (json.instagram_id) {
      ids.instagram = json.instagram_id;
    }
    if (json.twitter_id) {
      ids.twitter = json.twitter_id;
    }
    return ids;
  }
}
