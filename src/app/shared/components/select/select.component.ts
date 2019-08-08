import {
  Component,
  OnInit,
  ViewChild,
  Input,
  AfterViewInit
} from '@angular/core';
import { SearchService } from '@services';
import { Subject, Observable, of } from 'rxjs';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap
} from 'rxjs/operators';
import { PaginatedData } from '@models';
import { PaginatedDataJson } from '@bridge-interfaces';

interface NgSelectSearchTerm {
  items: [];
  term: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @ViewChild('input') input: ViewChild;
  search: Subject<string> = new Subject();
  options$: Observable<any[]> = new Observable();
  items: any[];

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  onSearchAttempt(event: NgSelectSearchTerm) {
    this.search.next(event.term);
  }

  urE(event) {
    console.log(event);
  }
}
