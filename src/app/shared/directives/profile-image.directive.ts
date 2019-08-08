import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

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

@Directive({
  selector: '[appProfileImage]'
})
export class ProfileImageDirective implements OnInit {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  @Input() path: string;
  @Input() isPeople?: boolean;

  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.render.addClass(this.elementRef.nativeElement, 'rounded');
    this.setSize();
  }

  setSize() {
    const path = this.isPeople
      ? `https://image.tmdb.org/t/p/${facePath[this.size]}${this.path}`
      : `https://image.tmdb.org/t/p/${mediaPath[this.size]}${this.path}`;

    this.render.setAttribute(this.elementRef.nativeElement, 'src', path);
  }
}
