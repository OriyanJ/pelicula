import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  trending$ = new Observable();

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.trending$ = this.route.data.pipe(
      map((resolved: Data) => resolved.trending)
    );
  }
}
