import { Injectable } from '@angular/core';
import {
  CreditsJson,
  PeopleCastJson,
  PeopleCrewJson
} from '@bridge-interfaces';
import { Credits, PeopleCast, PeopleCrew } from '@models';

import { PeopleCastSerializer } from './people-cast-credit.serializer';
import { PeopleCrewSerializer } from './people-crew-serializer';

@Injectable({ providedIn: 'root' })
export class GetPeopleCreditsSerializer {
  constructor(
    private castSerizlier: PeopleCastSerializer,
    private crewSerizlier: PeopleCrewSerializer
  ) {}
  from(json: CreditsJson) {
    const credits = new Credits();
    credits.cast = this.serializeCast(json.cast);
    credits.crew = this.serializeCrew(json.crew);
    credits.id = json.id;
    return credits;
  }

  private serializeCast(cast: PeopleCastJson[]): PeopleCast[] {
    return cast.map(json => this.castSerizlier.from(json));
  }
  private serializeCrew(crew: PeopleCrewJson[]): PeopleCrew[] {
    return crew.map(json => this.crewSerizlier.from(json));
  }
}
