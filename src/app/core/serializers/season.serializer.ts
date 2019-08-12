import { Injectable } from '@angular/core';
import { SeasonJson } from '@bridge-interfaces';
import { Season } from '@models';

@Injectable({ providedIn: 'root' })
export class SeasonSerializer {
  from(json: SeasonJson) {
    const season = new Season();
    if (json.air_date) {
      season.airDate = json.air_date;
    }
    if (json.episode_count) {
      season.episodeCount = json.episode_count;
    }
    if (json.id) {
      season.id = json.id;
    }
    if (json.name) {
      season.name = json.name;
    }
    if (json.overview) {
      season.overview = json.overview;
    }
    if (json.poster_path) {
      season.posterPath = json.poster_path;
    }
    if (json.season_number) {
      season.seasonNumber = json.season_number;
    }
    return season;
  }
}
