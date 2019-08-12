import { Component, Input, OnInit } from '@angular/core';
import { MediaCast, Movie, Tv } from '@models';

@Component({
  selector: 'app-media-cast',
  templateUrl: './media-cast.component.html',
  styleUrls: ['./media-cast.component.scss']
})
export class MediaCastComponent implements OnInit {
  @Input() cast: MediaCast[];
  @Input() media: Movie | Tv;
  type: string;

  constructor() {}

  ngOnInit() {
    this.orderCast();
  }

  /**
   * Order cast by an order property.
   */
  orderCast() {
    this.cast.sort(
      (castA: MediaCast, castB: MediaCast) => castA.order - castB.order
    );
  }
}
