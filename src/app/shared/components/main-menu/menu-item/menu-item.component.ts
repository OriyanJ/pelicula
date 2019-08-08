import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../main-menu.component';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: MenuItem;
  isArray = Array.isArray;
  show: boolean;
  constructor() {}

  ngOnInit() {}
}
