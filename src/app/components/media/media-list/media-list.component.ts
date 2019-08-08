import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginatedData } from '@models';
import { MediaService } from '@services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';

interface ResolvedMedia {
  type: string;
  list: string;
  media: PaginatedData;
  title: string;
}

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {
  paginated$: Observable<PaginatedData> = new Observable();
  title$: Observable<string> = new Observable();
  private list: string;
  private type: string;

  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.list = this.route.snapshot.data.list;
    this.type = this.route.parent.snapshot.data.type;
    this.title$ = this.route.data.pipe(
      map((resolved: ResolvedMedia) => resolved.title)
    );
    this.getMedia(1, true);
  }

  /**
   * Get media list.
   * @param page Requested page
   * @param fromResolved Whether to subscribe to resolved data or MediaService
   */
  getMedia(page: number, fromResolved?: boolean) {
    const observer = fromResolved
      ? this.route.data
      : this.mediaService.getMediaList(this.type, this.list, page);

    this.paginated$ = observer.pipe(
      map((result: any) =>
        fromResolved ? (<ResolvedMedia>result).media : result
      )
    );
  }

  onPageChanged(page: number) {
    this.changeUrlLocation(page);
    this.getMedia(page);
  }

  /**
   * Add page query to the URL without real navigation. This will be useful when
   * client goes back from the previous page to this. Keeping the page will help
   * requesting the previous paginated page for media.
   *
   * @param page Page number
   */
  changeUrlLocation(page: number) {
    const urlTree = this.router.parseUrl(this.router.url);
    const urlWithoutParams = urlTree.root.children['primary'].segments
      .map(it => it.path)
      .join('/');
    this.location.go(`/${urlWithoutParams}?page=${page}`);
  }
}
