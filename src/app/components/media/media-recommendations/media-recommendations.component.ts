import { Component, OnInit, Input } from '@angular/core';
import { Movie, Tv } from '@models';

@Component({
  selector: 'app-media-recommendations',
  templateUrl: './media-recommendations.component.html',
  styleUrls: ['./media-recommendations.component.scss']
})
export class MediaRecommendationsComponent implements OnInit {
  @Input() recommendations: Movie[] | Tv[];
  constructor() {}

  ngOnInit() {}
}
