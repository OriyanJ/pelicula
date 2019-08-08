import { Component, OnInit, Input } from '@angular/core';
import { People, Movie, Tv } from '@models';

@Component({
  selector: 'app-now-playing-item',
  templateUrl: './now-playing-item.component.html',
  styleUrls: ['./now-playing-item.component.scss']
})
export class NowPlayingItemComponent implements OnInit {
  @Input() media: Movie | Tv | People;

  constructor() {}

  ngOnInit() {}
}
