import {
  Component,
  Input,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';

import { MenuItem } from '../main-menu.component';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: MenuItem;
  @ViewChild('elementRef') elementRef: ElementRef;
  showDropdown: boolean;
  isArray = Array.isArray;

  constructor() {}

  ngOnInit() {}

  @HostListener('document:click', ['$event.target']) onMouseEnter(target) {
    if (this.elementRef.nativeElement !== target) {
      this.showDropdown = false;
    }
  }
}
