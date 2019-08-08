import { Injectable } from '@angular/core';
import { MediaCastJson } from '@bridge-interfaces';
import { MediaCast } from '@models';

@Injectable({ providedIn: 'root' })
export class MediaCastSerializer {
  from(json: MediaCastJson): MediaCast {
    const cast = new MediaCast();
    if (json.cast_id) {
      cast.castId = json.cast_id;
    }
    if (json.character) {
      cast.character = json.character;
    }
    if (json.credit_id) {
      cast.creditId = json.credit_id;
    }
    if (json.id) {
      cast.id = json.id;
    }
    if (json.name) {
      cast.name = json.name;
    }
    if (json.profile_path) {
      cast.profilePath = json.profile_path;
    }
    if (typeof json.order !== 'undefined') {
      cast.order = json.order;
    }
    return cast;
  }
}
