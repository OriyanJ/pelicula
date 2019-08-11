import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  MainMenuComponent,
  MediaItemComponent,
  MediaPageTitleComponent,
  MenuItemComponent,
  PaceComponent,
  PageTitleComponent,
  ProfileImageComponent,
  ProgressbarComponent,
  ReviewComponent,
  SearchComponent
} from '@shared-components';
import {
  ClickedOutsideDirective,
  ProfileImageDirective
} from '@shared-directives';
import { AgePipe, RuntimePipe, TruncatePipe } from '@shared-pipes';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { PaginationModule } from 'ngx-bootstrap/pagination';

const modules = [CommonModule, RouterModule, NgSelectModule, FormsModule];
const components = [
  PaceComponent,
  ReviewComponent,
  PageTitleComponent,
  MediaPageTitleComponent,
  SearchComponent,
  ProfileImageComponent,
  MainMenuComponent,
  MenuItemComponent,
  MediaItemComponent,
  ProgressbarComponent
];
const directives = [ClickedOutsideDirective, ProfileImageDirective];
const pipes = [RuntimePipe, AgePipe, TruncatePipe];

@NgModule({
  imports: [...modules, PaginationModule.forRoot(), CollapseModule.forRoot()],
  declarations: [...components, ...pipes, ...directives],
  exports: [
    ...modules,
    ...components,
    ...pipes,
    ...directives,
    PaginationModule,
    CollapseModule
  ]
})
export class SharedModule {}
