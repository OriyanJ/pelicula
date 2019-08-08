import { MediaCastJson } from './media-cast.interface';
import { MediaCrewJson } from './media-crew.interface';
import { PeopleCastJson } from './people-cast.interface';
import { PeopleCrewJson } from './people-crew.interface';

export interface CreditsJson {
  id: number;
  cast: MediaCastJson[] | PeopleCastJson[];
  crew: MediaCrewJson[] | PeopleCrewJson[];
}
