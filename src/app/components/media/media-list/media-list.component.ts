import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { PaginatedData } from '@models';
import { MediaService } from '@services';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

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
  totalResults$: Subject<number> = new Subject();
  currentPage = 1;

  private list: string;
  private type: string;

  mediaData$: BehaviorSubject<PaginatedData> = new BehaviorSubject(null);

  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.pipe().subscribe((data: Data) => {
      this.mediaData$.next(data.media);
    });
    // this.list = this.route.snapshot.data.list;
    // this.type = this.route.parent.snapshot.data.type;
    // this.title$ = this.route.data.pipe(
    //   map((resolved: ResolvedMedia) => resolved.title)
    // );
    // this.getMedia(1, true);
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
      delay(2000),
      tap((result: Data | PaginatedData) => {
        const paginatedData = fromResolved ? (<Data>result).media : result;
        this.totalResults$.next(paginatedData.totalResults);
        this.currentPage = paginatedData.page;
      }),
      map((result: Data | PaginatedData) =>
        fromResolved ? (<Data>result).media : result
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
