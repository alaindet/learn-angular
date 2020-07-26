import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PostsContainerComponent } from './containers/posts/posts.component';
import { PostsApiService } from './services/posts-api.service';
import { PostsService } from './services/posts.service';
import { UiBreadcrumbsModule } from './../../shared/ui/components/breadcrumbs/breadcrumbs.module';
import { UiButtonModule } from './../../shared/ui/components/button/button.module';
import { UiCardModule } from './../../shared/ui/components/card/card.module';
import { UiGridModule } from './../../shared/ui/components/grid/grid.module';

const routes: Routes = [
  {
    path: '',
    component: PostsContainerComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,

    UiBreadcrumbsModule,
    UiButtonModule,
    UiCardModule,
    UiGridModule,
  ],
  declarations: [
    PostsContainerComponent,
  ],
  providers: [
    PostsApiService,
    PostsService,
  ],
})
export class PostsFeatureModule {}
