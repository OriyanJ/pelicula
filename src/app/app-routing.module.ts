import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CreditsComponent,
  HomepageComponent,
  MediaComponent,
  MediaDetailsComponent,
  MediaListComponent,
  PeopleComponent,
  ReviewsComponent,
  LoginComponent
} from '@components';
import {
  GetExternalIdsResolve,
  GetMediaCreditsResolve,
  GetMediaDetailsResolve,
  GetMediaKeywordsResolve,
  GetMediaListResolve,
  GetMediaRecommendationsResolve,
  GetMediaReviewsResolve,
  GetMediaVideosResolve,
  GetPeopleCreditsResolve,
  GetPeopleResolve,
  GetTvSeasonsResolve
} from '@shared-resolvers';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'movie',
    component: MediaComponent,
    data: { type: 'movie' },
    children: [
      {
        path: 'now-playing',
        component: MediaListComponent,
        data: { list: 'now_playing', title: 'Now Playing Movies' },
        resolve: { media: GetMediaListResolve }
      },
      {
        path: 'popular',
        component: MediaListComponent,
        data: { list: 'popular', title: 'Popular Movies' },
        resolve: { media: GetMediaListResolve }
      },
      {
        path: 'top-rated',
        component: MediaListComponent,
        data: { list: 'top_rated', title: 'Top Rated Movies' },
        resolve: { media: GetMediaListResolve }
      },
      {
        path: 'upcoming',
        component: MediaListComponent,
        data: { list: 'upcoming', title: 'Upcoming Movies' },
        resolve: { media: GetMediaListResolve }
      },
      {
        path: ':id',
        component: MediaDetailsComponent,
        data: { type: 'movie' },
        resolve: {
          media: GetMediaDetailsResolve,
          credits: GetMediaCreditsResolve,
          reviews: GetMediaReviewsResolve,
          keywords: GetMediaKeywordsResolve,
          videos: GetMediaVideosResolve,
          recommendations: GetMediaRecommendationsResolve,
          externalIds: GetExternalIdsResolve
        }
      }
    ]
  },

  {
    path: 'movie/:id/credits',
    component: CreditsComponent,
    data: { type: 'movie' },
    resolve: { media: GetMediaDetailsResolve, credits: GetMediaCreditsResolve }
  },
  {
    path: 'movie/:id/reviews',
    component: ReviewsComponent,
    data: { type: 'movie' },
    resolve: { media: GetMediaDetailsResolve, reviews: GetMediaReviewsResolve }
  },
  {
    path: 'tv',
    component: MediaComponent,
    data: { type: 'tv' },
    children: [
      {
        path: 'popular',
        component: MediaListComponent,
        data: { list: 'popular', title: 'Popular TV Shows' },
        resolve: { media: GetMediaListResolve }
      },
      {
        path: 'now-playing',
        component: MediaListComponent,
        data: { list: 'on_the_air', title: 'Now Playing TV Shows' },
        resolve: { media: GetMediaListResolve }
      },
      {
        path: 'top-rated',
        component: MediaListComponent,
        data: { list: 'top_rated', title: 'Top Rated TV Shows' },
        resolve: { media: GetMediaListResolve }
      },
      {
        path: 'airing-today',
        component: MediaListComponent,
        data: { list: 'airing_today', title: 'TV Shows Airing Today' },
        resolve: { media: GetMediaListResolve }
      }
    ]
  },
  {
    path: 'tv/:id',
    component: MediaDetailsComponent,
    data: { type: 'tv' },
    runGuardsAndResolvers: 'always',
    resolve: {
      media: GetMediaDetailsResolve,
      credits: GetMediaCreditsResolve,
      reviews: GetMediaReviewsResolve,
      keywords: GetMediaKeywordsResolve,
      videos: GetMediaVideosResolve,
      recommendations: GetMediaRecommendationsResolve,
      externalIds: GetExternalIdsResolve
    }
  },
  {
    path: 'tv/:id/credits',
    component: CreditsComponent,
    data: { type: 'tv' },
    resolve: {
      media: GetMediaDetailsResolve,
      credits: GetMediaCreditsResolve
    }
  },
  {
    path: 'tv/:id/reviews',
    component: ReviewsComponent,
    data: { type: 'tv' },
    resolve: { media: GetMediaDetailsResolve, reviews: GetMediaReviewsResolve }
  },
  {
    path: 'person/:id',
    component: PeopleComponent,
    resolve: { person: GetPeopleResolve, credits: GetPeopleCreditsResolve }
  },
  {
    path: 'search-results',
    loadChildren:
      './components/search-results/search-results.module#SearchResultsModule'
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
