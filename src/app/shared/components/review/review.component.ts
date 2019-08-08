import { Component, OnInit, Input } from '@angular/core';
import { Review } from '@models';

const SLICE_POINT = 900;

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() review: Review;
  @Input() isCollapsed: boolean;

  isSliced: boolean;
  maxLength = SLICE_POINT;

  constructor() {}

  ngOnInit() {
    this.isSliced = this.review.content.length > this.maxLength ? true : null;
  }

  /**
   * Toggle review slicing.
   * @param condition Whether to show the review or slice it
   */
  toggleSlicing(condition: 'show' | 'hide') {
    const isShow = condition === 'show';
    this.isSliced = !isShow;
    this.maxLength = isShow ? this.review.content.length : SLICE_POINT;
  }
}
