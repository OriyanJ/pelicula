import { Component, OnInit, Input } from '@angular/core';
import { Movie, Tv, Keyword } from '@models';

@Component({
  selector: 'app-media-facts',
  templateUrl: './media-facts.component.html',
  styleUrls: ['./media-facts.component.scss']
})
export class MediaFactsComponent implements OnInit {
  @Input() media: Movie | Tv;
  @Input() keywords?: Keyword[];
  type: string;

  constructor() {}

  ngOnInit() {
    this.type = this.media.constructor.name.toLowerCase();
  }
}
