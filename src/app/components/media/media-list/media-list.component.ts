import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { PaginatedData } from '@models';
import { MediaService } from '@services';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit, OnDestroy {
  paginated$: BehaviorSubject<PaginatedData> = new BehaviorSubject(null);
  title: string;

  private list: string;
  private mediaType: string;

  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.pipe(untilDestroyed(this)).subscribe((data: Data) => {
      this.paginated$.next(data.media);
      this.list = data.list;
      this.title = data.title;
    });
    this.mediaType = this.route.parent.snapshot.data.type;
  }

  ngOnDestroy() {}

  /**
   * Get media list.
   * @param page Requested page
   */
  getMedia(page?: number) {
    this.mediaService
      .getMediaList(this.mediaType, this.list, page)
      .subscribe((paginated: PaginatedData) => {
        this.paginated$.next(paginated);
      });
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
