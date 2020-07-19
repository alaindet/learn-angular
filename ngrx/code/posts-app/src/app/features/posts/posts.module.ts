import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PostsContainerComponent } from './containers/posts/posts.component';

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
  ],
  declarations: [
    PostsContainerComponent,
  ],
})
export class PostsFeatureModule {}
