import { Season } from './season.model';

export class Tv {
  backdropPath?: string | null;
  createdBy?: object[];
  episodeRuntime?: number[];
  firstAirDate?: string;
  genres?: object[];
  homepage?: string;
  id?: number;
  inProduction?: boolean;
  languages?: string[];
  lastAirDate?: string;
  lastEpisodeToAir?: object;
  mediaType?: string;
  name?: string;
  nextEpisodeToAir?: null;
  networks?: object[];
  totalEpisodes?: number;
  totalSeasons?: number;
  originCountry?: string[];
  originalLanguage?: string;
  originalName?: string;
  overview?: string;
  popularity?: number;
  posterPath?: string | null;
  productionCompanies?: object[];
  seasons?: Season[];
  status?: string;
  type?: string;
  voteAverage?: number;
  voteCount?: number;
}
