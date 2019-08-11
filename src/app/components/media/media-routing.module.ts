import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CreditsComponent,
  MediaComponent,
  MediaDetailsComponent,
  MediaListComponent,
  ReviewsComponent
} from '@components';
import {
  GetMediaCreditsResolve,
  GetMediaDetailsResolve,
  GetMediaKeywordsResolve,
  GetMediaListResolve,
  GetMediaRecommendationsResolve,
  GetMediaReviewsResolve,
  GetMediaVideosResolve,
  GetExternalIdsResolve
} from '@shared-resolvers';

const routes: Routes = [
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
      }
    ]
  },
  {
    path: 'movie/:id',
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
    resolve: { media: GetMediaDetailsResolve, credits: GetMediaCreditsResolve }
  },
  {
    path: 'tv/:id/reviews',
    component: ReviewsComponent,
    data: { type: 'tv' },
    resolve: { media: GetMediaDetailsResolve, reviews: GetMediaReviewsResolve }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediaRoutingModule {}
