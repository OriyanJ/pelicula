import { Component, OnInit } from '@angular/core';

export class MenuItem {
  label: string;
  data: string | MenuItem[];
  constructor(label: string, data: string | MenuItem[]) {
    this.label = label;
    this.data = data;
  }
}

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  menuItems: MenuItem[] = [
    new MenuItem('Movies', [
      new MenuItem('Now Playing', '/movie/now-playing'),
      new MenuItem('Popular', '/movie/popular'),
      new MenuItem('Top Rated', '/movie/top-rated')
    ]),
    new MenuItem('TV Shows', 'now-playing')
  ];

  isArray = Array.isArray;

  constructor() {}

  ngOnInit() {
    console.log(this.menuItems);
  }
}
