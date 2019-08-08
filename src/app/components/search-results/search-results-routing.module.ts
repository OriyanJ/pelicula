import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResolver } from '@shared-resolvers';

import { SearchResultsComponent } from './search-results.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent,
    resolve: { results: SearchResolver },
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: ':mediaType',
        component: SearchResultsComponent,
        runGuardsAndResolvers: 'always'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultsRoutingModule {}
