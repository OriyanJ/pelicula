import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { PaginatedData } from '@models';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

interface FilterOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface Mapped {
  resolved: Data;
  filterBy?: string;
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  paginated$: Observable<PaginatedData> = new Observable();

  filterType: FilterOption[] = [
    {
      value: 'tv',
      label: 'TV Shows'
    },
    {
      value: 'movie',
      label: 'Movies'
    },
    {
      value: 'person',
      label: 'People'
    }
  ];

  searchResults = {};
  selectedResults: any[] = [];
  selectedOption = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.paginated$ = this.route.data.pipe(
      switchMap((data: Data) => {
        this.clearSearchResults();

        // If current route is a child, then extract its media
        if (this.route.firstChild) {
          return this.route.firstChild.paramMap.pipe(
            map(params => ({
              resolved: data,
              filterBy: params.get('mediaType') ? params.get('mediaType') : null
            }))
          );
        }

        return of({
          resolved: data
        });
      }),
      tap((mapped: Mapped) => {
        const resolved = mapped.resolved;
        const paginatedData: PaginatedData = resolved.results
          ? resolved.results
          : new PaginatedData();

        // Get the first result out of the paginated data
        const firstResult = paginatedData.data.length
          ? paginatedData.data[0]
          : null;

        // Set a media type filter
        const filterBy = mapped.filterBy
          ? mapped.filterBy
          : firstResult.mediaType;

        // Set a selected media type filter
        this.filterType.some(option => {
          if (option.value === filterBy) {
            this.selectedOption = option;
          }
          if (mapped.filterBy) {
            return false;
          } else {
            return option.value === firstResult.mediaType;
          }
        });

        this.splitResultsToCategories(paginatedData.data);
        this.onFilterChange(filterBy);
      }),
      switchMap((mapped: Mapped) => of(mapped.resolved.results))
    );
  }

  splitResultsToCategories(results: any[]) {
    for (const result of results) {
      this.searchResults[result.mediaType].push(result);
    }
  }

  /**
   * Clear the search results. This is being done in order to wipe the
   * results before pushing new results into it.
   */
  clearSearchResults() {
    this.searchResults = {
      movie: [],
      tv: [],
      person: []
    };
  }

  onFilterChange(filterBy?: string) {
    filterBy = filterBy ? filterBy : this.selectedOption.value;
    this.selectedResults = this.searchResults[filterBy];
  }
}
