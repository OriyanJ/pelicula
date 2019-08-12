import { Component, OnInit } from '@angular/core';
import { PaginatedData } from '@models';
import { HomepageState } from '@state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage-now-playing',
  templateUrl: './homepage-now-playing.component.html',
  styleUrls: ['./homepage-now-playing.component.scss']
})
export class HomepageNowPlayingComponent implements OnInit {
  tvShows$: Observable<PaginatedData> = new Observable();
  movies$: Observable<PaginatedData> = new Observable();

  constructor(private homepageState: HomepageState) {}

  ngOnInit() {
    this.initTvShows();
    this.initMovies();
  }

  initTvShows() {
    this.tvShows$ = this.homepageState.onTv$;
    this.homepageState.loadTvShows();
  }

  initMovies() {
    this.movies$ = this.homepageState.inTheaters$;
    this.homepageState.loadMovies();
  }
}
