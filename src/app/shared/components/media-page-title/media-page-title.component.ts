import { Component, OnInit, Input } from '@angular/core';
import { Movie, Tv } from '@models';

@Component({
  selector: 'app-media-page-title',
  templateUrl: './media-page-title.component.html',
  styleUrls: ['./media-page-title.component.scss']
})
export class MediaPageTitleComponent implements OnInit {
  @Input() media: Movie | Tv;

  constructor() {}

  ngOnInit() {}
}
