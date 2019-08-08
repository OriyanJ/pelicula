import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, Review } from '@models';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  media$: Observable<Movie> = new Observable<Movie>();
  reviews$: Observable<Review[]> = new Observable<Review[]>();
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.media$ = this.route.data.pipe(map(resolved => resolved.media));
    this.reviews$ = this.route.data.pipe(map(resolved => resolved.reviews));
  }
}
