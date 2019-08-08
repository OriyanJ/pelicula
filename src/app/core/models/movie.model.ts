import { Genre } from './genre.model';

export class Movie {
  isAdult?: boolean;
  backdropPath?: string | null;
  belongsToCollection?: null | Object;
  budget?: number;
  genres?: Genre[];
  homepage?: string | null;
  id?: number;
  imdbId?: string | null; // minLength: 9, maxLength: 9, pattern: ^tt[0-9]{7}
  mediaType?: string;
  originalLanguage?: string;
  originalTitle?: string;
  overview?: string | null;
  popularity?: number;
  posterPath?: string | null;
  productionCompanies?: Object[];
  productionCountries?: Object[];
  releaseDate?: string;
  format: Date;
  revenue?: number;
  runtime?: number | null;
  spokenLanguages?: Object[];
  status?: string; // Rumored, Planned, In Production, Post Production, Released, Canceled
  tagline?: string | null;
  title?: string;
  video?: boolean;
  voteAverage?: number;
  voteCount?: number;
}
