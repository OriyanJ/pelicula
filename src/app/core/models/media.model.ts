import { Genre } from './genre.model';

export class Media {
  genres?: Genre[];
  website?: string;
  id?: number;
  mediaType?: string;
  originalLanguage?: string;
  overview?: string;
  popularity?: number;
  posterPath?: string;
  productionCompanies?: [];
  status?: string;
  title?: string;
  voteAverage?: number;
  voteCount?: number;
}
