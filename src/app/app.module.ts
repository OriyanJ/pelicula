import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditsComponent } from '@components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageNowPlayingComponent } from './components/homepage/homepage-now-playing/homepage-now-playing.component';
import { NowPlayingItemComponent } from './components/homepage/homepage-now-playing/now-playing-item/now-playing-item.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { MediaCastComponent } from './components/media/media-cast/media-cast.component';
import { MediaDetailsComponent } from './components/media/media-details/media-details.component';
import { MediaFactsComponent } from './components/media/media-facts/media-facts.component';
import { MediaHeaderComponent } from './components/media/media-header/media-header.component';
import { MediaListComponent } from './components/media/media-list/media-list.component';
import { MediaRecommendationsComponent } from './components/media/media-recommendations/media-recommendations.component';
import { MediaReviewsComponent } from './components/media/media-reviews/media-reviews.component';
import { MediaSeasonsComponent } from './components/media/media-seasons/media-seasons.component';
import { MediaComponent } from './components/media/media.component';
import { PeopleCreditComponent } from './components/people/people-credits/people-credit/people-credit.component';
import { PeopleCreditsComponent } from './components/people/people-credits/people-credits.component';
import { PeopleHeaderComponent } from './components/people/people-header/people-header.component';
import { PeopleInfoComponent } from './components/people/people-info/people-info.component';
import { PeopleKnownForComponent } from './components/people/people-known-for/people-known-for.component';
import { PeopleComponent } from './components/people/people.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ApiInterceptor } from './core/interceptors';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { AccountReducer } from './core/state/account/account.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CreditsComponent,
    PaginationComponent,
    ReviewsComponent,
    MediaComponent,
    MediaListComponent,
    MediaDetailsComponent,
    MediaFactsComponent,
    MediaHeaderComponent,
    MediaCastComponent,
    MediaReviewsComponent,
    MediaSeasonsComponent,
    PeopleComponent,
    PeopleInfoComponent,
    PeopleCreditsComponent,
    PeopleKnownForComponent,
    PeopleHeaderComponent,
    PeopleCreditComponent,
    MediaRecommendationsComponent,
    HomepageComponent,
    DashboardComponent,
    HomepageNowPlayingComponent,
    NowPlayingItemComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ account: AccountReducer })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
