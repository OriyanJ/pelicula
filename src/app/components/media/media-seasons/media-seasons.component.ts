import { Component, OnInit, Input } from '@angular/core';
import { Tv } from '@models';

@Component({
  selector: 'app-media-seasons',
  templateUrl: './media-seasons.component.html',
  styleUrls: ['./media-seasons.component.scss']
})
export class MediaSeasonsComponent implements OnInit {
  @Input() media: Tv;
  constructor() {}

  ngOnInit() {
    console.log(this.media.nextEpisodeToAir);

    const lastSeason = this.media.seasons[this.media.seasons.length - 1];
  }
}
