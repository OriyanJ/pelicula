import { Component, OnInit, Input } from '@angular/core';
import { Credit, PeopleCast, PeopleCrew } from '@models';

@Component({
  selector: 'app-people-credit',
  templateUrl: './people-credit.component.html',
  styleUrls: ['./people-credit.component.scss']
})
export class PeopleCreditComponent implements OnInit {
  @Input() credit: PeopleCast | PeopleCrew;
  isCast: boolean;
  isMovie: boolean;

  constructor() {}

  ngOnInit() {
    this.isCast = this.credit.constructor.name === 'PeopleCast';
    this.isMovie = this.credit.mediaType === 'movie';
  }
}
