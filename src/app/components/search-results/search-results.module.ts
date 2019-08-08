import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchResultsComponent } from './search-results.component';

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [CommonModule, SearchResultsRoutingModule, SharedModule],
  exports: [],
  providers: []
})
export class SearchResultsModule {}
