import { GenreJson } from './genre.interface';
import { ProductionCompanyJson } from './production-company.interface';
import { ProductionCountryJson } from './production-country.interface';
import { SpokenLanguageJson } from './spoken-language.interface';

export interface MovieJson {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: null | object;
  budget?: number;
  genres?: GenreJson[];
  homepage?: string | null;
  id?: number;
  imdb_id?: string | null; // minLength: 9, maxLength: 9, pattern: ^tt[0-9]{7}
  media_type?: string;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: ProductionCompanyJson[];
  production_countries?: ProductionCountryJson[];
  release_date?: string;
  format: Date;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: SpokenLanguageJson[];
  status?: string; // Rumored, Planned, In Production, Post Production, Released, Canceled
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
