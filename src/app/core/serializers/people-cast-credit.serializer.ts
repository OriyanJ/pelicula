import { Injectable } from '@angular/core';
import { PeopleCastJson } from '@bridge-interfaces';
import { PeopleCast } from '@models';

@Injectable({ providedIn: 'root' })
export class PeopleCastSerializer {
  from(json: PeopleCastJson): PeopleCast {
    const cast = new PeopleCast();
    const isMovie = json.media_type === 'movie';

    if (json.id) {
      cast.id = json.id;
    }

    cast.mediaType = json.media_type;

    cast.title = isMovie ? json.title : json.name;
    cast.releaseDate = isMovie ? json.release_date : json.first_air_date;

    if (!isMovie) {
      cast.episodeCount = json.episode_count;
    }

    if (json.poster_path) {
      cast.posterPath = json.poster_path;
    }

    if (json.character) {
      cast.character = json.character;
    }

    if (json.popularity) {
      cast.popularity = json.popularity;
    }

    if (json.credit_id) {
      cast.creditId = json.credit_id;
    }

    return cast;
  }
}
