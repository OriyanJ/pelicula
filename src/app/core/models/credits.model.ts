import { MediaCast } from './media-cast.model';
import { MediaCrew } from './media-crew.model';
import { PeopleCast } from './people-cast.model';
import { PeopleCrew } from './people-crew.model';

export class Credits {
  cast: Array<MediaCast | PeopleCast>;
  crew: Array<MediaCrew | PeopleCrew>;
  id: number;
}
