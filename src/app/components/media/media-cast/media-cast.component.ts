import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaCast } from '@models';

@Component({
  selector: 'app-media-cast',
  templateUrl: './media-cast.component.html',
  styleUrls: ['./media-cast.component.scss']
})
export class MediaCastComponent implements OnInit {
  @Input() cast: MediaCast[];
  mediaId: number;
  type: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.mediaId = this.route.snapshot.params.id;
    this.type = this.route.snapshot.data.type;
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
