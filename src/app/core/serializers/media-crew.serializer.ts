import { Injectable } from '@angular/core';
import { MediaCrewJson } from '@bridge-interfaces';
import { MediaCrew } from '@models';

@Injectable({ providedIn: 'root' })
export class MediaCrewSerializer {
  from(json: MediaCrewJson): MediaCrew {
    const crew = new MediaCrew();
    if (json.credit_id) {
      crew.creditId = json.credit_id;
    }
    if (json.department) {
      crew.department = json.department;
    }
    if (json.id) {
      crew.id = json.id;
    }
    if (json.job) {
      crew.job = json.job;
    }
    if (json.name) {
      crew.name = json.name;
    }
    if (json.profile_path) {
      crew.profilePath = json.profile_path;
    }
    return crew;
  }
}
