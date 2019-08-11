import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart
} from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
