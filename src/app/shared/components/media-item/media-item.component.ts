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

  constructor() {}

  ngOnInit() {}
}
