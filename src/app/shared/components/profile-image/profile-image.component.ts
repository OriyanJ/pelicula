import { Component, OnInit, Input } from '@angular/core';

enum Sizes {
  EXTRA_SMALL = 'xs',
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  EXTRA_LARGE = 'xl'
}

const mediaPath = {
  [Sizes.EXTRA_SMALL]: 'w58_and_h87_bestv2',
  [Sizes.SMALL]: 'w94_and_h141_bestv2',
  [Sizes.MEDIUM]: 'w185_and_h278_bestv2',
  [Sizes.LARGE]: 'w300_and_h450_bestv2',
  [Sizes.EXTRA_LARGE]: 'w600_and_h900_bestv2'
};

const facePath = {
  [Sizes.EXTRA_SMALL]: 'w66_and_h66_face',
  [Sizes.SMALL]: 'w138_and_h175_face',
  [Sizes.MEDIUM]: 'w185_and_h278_face',
  [Sizes.LARGE]: 'w300_and_h450_face',
  [Sizes.EXTRA_LARGE]: 'w600_and_h900_face'
};

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {
  @Input() path: string;
  @Input() size: string;
  @Input() isPeople?: boolean;

  mediaPath = mediaPath;

  constructor() {}

  ngOnInit() {}
}
