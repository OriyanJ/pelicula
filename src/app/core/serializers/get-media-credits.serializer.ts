import { Injectable } from '@angular/core';
import { CreditsJson, MediaCastJson, MediaCrewJson } from '@bridge-interfaces';
import { Credits, MediaCast, MediaCrew } from '@models';

import { MediaCastSerializer } from './media-cast.serializer';
import { MediaCrewSerializer } from './media-crew.serializer';

@Injectable({ providedIn: 'root' })
export class GetMediaCreditsSerializer {
  constructor(
    private castSerizlier: MediaCastSerializer,
    private crewSerizlier: MediaCrewSerializer
  ) {}
  from(json: CreditsJson) {
    const credits = new Credits();
    credits.cast = this.serializeCast(json.cast as MediaCastJson[]);
    credits.crew = this.serializeCrew(json.crew as MediaCrewJson[]);
    credits.id = json.id;
    return credits;
  }

  private serializeCast(cast: MediaCastJson[]): MediaCast[] {
    return cast.map(json => this.castSerizlier.from(json));
  }
  private serializeCrew(crew: MediaCrewJson[]): MediaCrew[] {
    return crew.map(json => this.crewSerizlier.from(json));
  }
}
