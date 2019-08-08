import { Injectable } from '@angular/core';
import { PeopleCrewJson } from '@bridge-interfaces';
import { PeopleCrew } from '@models';

@Injectable({ providedIn: 'root' })
export class PeopleCrewSerializer {
  from(json: PeopleCrewJson): PeopleCrew {
    const crew = new PeopleCrew();
    if (json.id) {
      crew.id = json.id;
    }
    if (json.department) {
      crew.department = json.department;
    }
    if (json.job) {
      crew.job = json.job;
    }
    if (json.media_type) {
      const isMovie = json.media_type === 'movie';
      crew.mediaType = json.media_type;
      crew.title = isMovie ? json.title : json.name;
      crew.releaseDate = isMovie ? json.release_date : json.first_air_date;
    }
    if (json.popularity) {
      crew.popularity = json.popularity;
    }
    if (json.credit_id) {
      crew.creditId = json.credit_id;
    }
    if (json.poster_path) {
      crew.posterPath = json.poster_path;
    }

    return crew;
  }
}
