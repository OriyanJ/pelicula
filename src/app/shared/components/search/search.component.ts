import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { PaginatedData } from '@models';
import { SearchService } from '@services';
import { Subject } from 'rxjs';
import {
  debounceTime,
  switchMap,
  tap,
  filter,
  takeUntil
} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('searchInput') searchInput: ElementRef;
  private unsubscribe$: Subject<void> = new Subject<void>();
  private search: Subject<string> = new Subject();
  private stopSearch: boolean;
  topResults = [];
  options: any[];
  query: string;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.search
      .pipe(
        debounceTime(500),
        filter(() => !!this.query),
        switchMap(query => this.searchService.searchMulti(query)),
        tap((paginatedData: PaginatedData) => {
          this.options = this.mapResults(paginatedData.data);
          console.log(this.topResults);
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onResultsReceived(options: any[]) {}

  onSearch() {
    if (this.query) {
      this.search.next(this.query);
    }
  }

  mapResults(results: any[]) {
    const mappedTopResults = {};
    const filteredResults = results.filter(result => {
      if (mappedTopResults[result.mediaType]) {
        return true;
      }
      mappedTopResults[result.mediaType] = result;
      return false;
    });

    this.topResults = Object.values(mappedTopResults);
    return filteredResults;
  }

  @HostListener('document:click', ['$event.target']) onMouseEnter(
    targetElement
  ) {
    const clickedOnInput = this.searchInput.nativeElement.contains(
      targetElement
    );

    if (clickedOnInput) {
      return;
    }
    if (this.options) {
      this.options = null;
    }
    if (this.query) {
      this.query = null;
    }
    if (this.stopSearch) {
    }
  }
}
