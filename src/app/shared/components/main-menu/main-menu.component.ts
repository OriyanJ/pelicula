import { Component, OnInit } from '@angular/core';
import { Event, Router } from '@angular/router';

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
      new MenuItem('Top Rated', '/movie/top-rated'),
      new MenuItem('Upcoming', '/movie/upcoming')
    ]),
    new MenuItem('TV Shows', [
      new MenuItem('On TV', '/tv/now-playing'),
      new MenuItem('Popular', '/tv/popular'),
      new MenuItem('Top Rated', '/tv/top-rated'),
      new MenuItem('Airing Today', '/tv/airing-today')
    ])
  ];

  isArray = Array.isArray;
  showProgress: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.handleRouting();
  }

  handleRouting() {
    this.router.events.pipe().subscribe((event: Event) => {
      switch (event.constructor.name) {
        case 'NavigationStart':
          this.showProgress = true;
          break;

        case 'NavigationCancel':
        case 'NavigationEnd':
        case 'NavigationError':
          this.showProgress = false;
          break;
      }
    });
  }
}
