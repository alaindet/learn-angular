import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PostsContainerComponent } from './container/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsContainerComponent,
  }
];

@NgModule({
  declarations: [
    PostsContainerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    PostsContainerComponent,
  ]
})
export class PostsFeatureModule {}
