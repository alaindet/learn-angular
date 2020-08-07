import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { UiBreadcrumbsModule } from './../../shared/ui/components/breadcrumbs/breadcrumbs.module';
import { UiButtonModule } from './../../shared/ui/components/button/button.module';
import { UiCardModule } from './../../shared/ui/components/card/card.module';
import { UiCapitalizePipeModule } from './../../shared/ui/pipes/capitalize/capitalize.module';
import { UiGhostDotsModule } from './../../shared/ui/components/ghost/dots/dots.module';
import { UiGhostRectangleModule } from './../../shared/ui/components/ghost/rectangle/rectangle.module';
import { UiGridModule } from './../../shared/ui/components/grid/grid.module';
import { UiPaginationModule } from './../../shared/ui/components/pagination/pagination.module';
import { UiTruncatePipeModule } from './../../shared/ui/pipes/truncate/truncate.module';

import { PostsContainerComponent } from './containers/posts/posts.component';
import { PostContainerComponent } from './containers/post/post.component';
import { PostsApiService } from './services/posts-api.service';
import { PostsService } from './services/posts.service';

const routes: Routes = [
  {
    path: '',
    component: PostsContainerComponent,
  },
  {
    path: ':id',
    component: PostContainerComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,

    UiBreadcrumbsModule,
    UiButtonModule,
    UiCardModule,
    UiCapitalizePipeModule,
    UiGhostDotsModule,
    UiGhostRectangleModule,
    UiGridModule,
    UiPaginationModule,
    UiTruncatePipeModule,
  ],
  declarations: [
    PostsContainerComponent,
    PostContainerComponent,
  ],
  providers: [
    PostsApiService,
    PostsService,
  ],
})
export class PostsFeatureModule {}
