import { Injectable } from '@angular/core';
import { MovieJson, TvJson } from '@bridge-interfaces';
import { Movie, Tv } from '@models';
import { MediaType } from '@globals';

@Injectable({ providedIn: 'root' })
export class MediaSerializer {
  constructor() {}

  from(media: MovieJson | TvJson, type: string): Movie | Tv {
    switch (type) {
      case MediaType.MOVIE:
        return this.serializeMovie(media as MovieJson);
      case MediaType.TV:
        return this.serializeTv(media as TvJson);
      default:
        break;
    }
  }

  private serializeMovie(json: MovieJson): Movie {
    const movie = new Movie();
    movie.mediaType = MediaType.MOVIE;
    if (json.adult) {
      movie.isAdult = json.adult;
    }
    if (json.backdrop_path) {
      movie.backdropPath = json.backdrop_path;
    }
    if (json.belongs_to_collection) {
      movie.belongsToCollection = json.belongs_to_collection;
    }
    if (json.budget) {
      movie.budget = json.budget;
    }
    if (json.genres) {
      movie.genres = json.genres;
    }
    if (json.homepage) {
      movie.homepage = json.homepage;
    }
    if (json.id) {
      movie.id = json.id;
    }
    if (json.imdb_id) {
      movie.imdbId = json.imdb_id;
    }
    if (json.original_language) {
      movie.originalLanguage = json.original_language;
    }
    if (json.original_title) {
      movie.originalTitle = json.original_title;
    }
    if (json.overview) {
      movie.overview = json.overview;
    }
    if (json.popularity) {
      movie.popularity = json.popularity;
    }
    if (json.poster_path) {
      movie.posterPath = json.poster_path;
    }
    if (json.production_companies) {
      movie.productionCompanies = json.production_companies;
    }
    if (json.production_countries) {
      movie.productionCountries = json.production_countries;
    }
    if (json.release_date) {
      movie.releaseDate = json.release_date;
    }
    if (json.format) {
      movie.format = json.format;
    }
    if (json.revenue) {
      movie.revenue = json.revenue;
    }
    if (json.runtime) {
      movie.runtime = json.runtime;
    }
    if (json.spoken_languages) {
      movie.spokenLanguages = json.spoken_languages;
    }
    if (json.status) {
      movie.status = json.status;
    }
    if (json.tagline) {
      movie.tagline = json.tagline;
    }
    if (json.title) {
      movie.title = json.title;
    }
    if (json.video) {
      movie.video = json.video;
    }
    if (json.vote_average) {
      movie.voteAverage = json.vote_average;
    }
    if (json.vote_count) {
      movie.voteCount = json.vote_count;
    }
    return movie;
  }

  private serializeTv(json: TvJson): Tv {
    const tv = new Tv();
    tv.mediaType = 'tv';
    if (json.backdrop_path) {
      tv.backdropPath = json.backdrop_path;
    }
    if (json.created_by) {
      tv.createdBy = json.created_by;
    }
    if (json.episode_run_time) {
      tv.episodeRuntime = json.episode_run_time;
    }
    if (json.first_air_date) {
      tv.firstAirDate = json.first_air_date;
    }
    if (json.genres) {
      tv.genres = json.genres;
    }
    if (json.homepage) {
      tv.homepage = json.homepage;
    }
    if (json.id) {
      tv.id = json.id;
    }
    if (json.in_production) {
      tv.inProduction = json.in_production;
    }
    if (json.languages) {
      tv.languages = json.languages;
    }
    if (json.last_air_date) {
      tv.lastAirDate = json.last_air_date;
    }
    if (json.last_episode_to_air) {
      tv.lastEpisodeToAir = json.last_episode_to_air;
    }
    if (json.name) {
      tv.name = json.name;
    }
    if (json.next_episode_to_air) {
      tv.nextEpisodeToAir = json.next_episode_to_air;
    }
    if (json.networks) {
      tv.networks = json.networks;
    }
    if (json.number_of_episodes) {
      tv.totalEpisodes = json.number_of_episodes;
    }
    if (json.number_of_seasons) {
      tv.totalSeasons = json.number_of_seasons;
    }
    if (json.origin_country) {
      tv.originCountry = json.origin_country;
    }
    if (json.original_language) {
      tv.originalLanguage = json.original_language;
    }
    if (json.original_name) {
      tv.originalName = json.original_name;
    }
    if (json.overview) {
      tv.overview = json.overview;
    }
    if (json.popularity) {
      tv.popularity = json.popularity;
    }
    if (json.poster_path) {
      tv.posterPath = json.poster_path;
    }
    if (json.production_companies) {
      tv.productionCompanies = json.production_companies;
    }
    if (json.seasons) {
      tv.seasons = json.seasons;
    }
    if (json.status) {
      tv.status = json.status;
    }
    if (json.type) {
      tv.type = json.type;
    }
    if (json.vote_average) {
      tv.voteAverage = json.vote_average;
    }
    if (json.vote_count) {
      tv.voteCount = json.vote_count;
    }
    return tv;
  }
}
