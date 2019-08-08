import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output
} from '@angular/core';

@Directive({
  selector: '[appClickedOutside]'
})
export class ClickedOutsideDirective {
  @Output('appClickedOutside') clickedOutside: EventEmitter<
    boolean
  > = new EventEmitter();
  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target']) onMouseEnter(
    targetElement
  ) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickedOutside.emit(true);
    }
  }
}
