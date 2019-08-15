import { Component, OnInit, Input } from '@angular/core';
import { Movie, Tv } from '@models';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss']
})
export class MediaItemComponent implements OnInit {
  @Input() media: Movie | Tv;
  @Input() minimal?: boolean;
  @Input() vertical?: boolean;

  isUpcoming: boolean;

  constructor() {}

  ngOnInit() {
    this.isUpcomingMovie();
  }

  isUpcomingMovie() {
    if (this.media.mediaType !== 'movie') {
      return;
    }
    const media = <Movie>this.media;
    const now = new Date();
    const releaseDate = new Date(media.releaseDate);
    this.isUpcoming = releaseDate > now;
  }
}
