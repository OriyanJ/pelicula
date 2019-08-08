import { Component, Input, OnInit } from '@angular/core';
import { Review } from '@models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-reviews',
  templateUrl: './media-reviews.component.html',
  styleUrls: ['./media-reviews.component.scss']
})
export class MediaReviewsComponent implements OnInit {
  @Input() reviews: Review[];
  id: string;
  type: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id
      ? this.route.snapshot.params.id
      : '';
    this.type = this.route.snapshot.data.type
      ? this.route.snapshot.data.type
      : '';
  }
}
