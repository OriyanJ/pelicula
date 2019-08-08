import { GenreJson } from './genre.interface';

export interface TvJson {
  backdrop_path?: string | null;
  created_by?: Object[];
  episode_run_time?: number[];
  first_air_date?: string;
  genres?: GenreJson[];
  homepage?: string;
  id?: number;
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  last_episode_to_air?: object;
  name?: string;
  next_episode_to_air?: null;
  networks?: Object[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  origin_country?: string[];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: Object[];
  seasons?: Object[];
  status?: string;
  type?: string;
  vote_average?: number;
  vote_count?: number;
}
