import { Component, Input, OnInit } from '@angular/core';
import { MediaCrew, Movie, Tv } from '@models';

@Component({
  selector: 'app-media-header',
  templateUrl: './media-header.component.html',
  styleUrls: ['./media-header.component.scss']
})
export class MediaHeaderComponent implements OnInit {
  @Input() media: Movie | Tv;
  @Input() crew: MediaCrew[];
  credits: MediaCrew[];

  constructor() {}

  ngOnInit() {}
}
