import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent implements OnInit {
  resolved$: Observable<Data> = new Observable();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.resolved$ = this.route.data.pipe(tap(console.log));
  }
}
