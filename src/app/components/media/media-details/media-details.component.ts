import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, Tv, Credits, Review, Keyword } from '@models';
import { ActivatedRoute, Data } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent implements OnInit {
  credits$: Observable<Credits> = new Observable();
  media$: Observable<Movie | Tv> = new Observable();
  reviews$: Observable<Review[]> = new Observable();
  keywords$: Observable<Keyword[]> = new Observable();
  recommendations$: Observable<Movie[] | Tv[]> = new Observable();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.media$ = this.route.data.pipe(map((resolved: Data) => resolved.media));
    this.credits$ = this.route.data.pipe(
      map((resolved: Data) => resolved.credits)
    );
    this.reviews$ = this.route.data.pipe(
      map((resolved: Data) => resolved.reviews)
    );
    this.keywords$ = this.route.data.pipe(
      map((resolved: Data) => resolved.keywords)
    );
    this.recommendations$ = this.route.data.pipe(
      map((resolved: Data) => resolved.recommendations)
    );
  }
}
