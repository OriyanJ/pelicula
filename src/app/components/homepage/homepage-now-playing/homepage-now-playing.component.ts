import { Component, OnInit, Input } from '@angular/core';
import { Movie, Tv } from '@models';

@Component({
  selector: 'app-homepage-now-playing',
  templateUrl: './homepage-now-playing.component.html',
  styleUrls: ['./homepage-now-playing.component.scss']
})
export class HomepageNowPlayingComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Input() tvShows: Tv[] = [];

  constructor() {}

  ngOnInit() {
    console.log(this.movies, this.tvShows);
  }
}
