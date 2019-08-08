import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface PaginationEvent {
  itemsPerPage: number;
  page: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() total: number;
  @Input() currentPage: number;
  @Input() totalResults: number;
  @Input() itemsPerPage: number;
  @Input() maxPages: number;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onPageChange(event: PaginationEvent) {
    if (this.currentPage === event.page) {
      return;
    }
    this.pageChanged.emit(event.page);
  }
}
