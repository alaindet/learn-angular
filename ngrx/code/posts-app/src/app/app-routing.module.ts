import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const DEFAULT_ROUTE = '/posts';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: DEFAULT_ROUTE,
  },
  {
    path: 'posts',
    loadChildren: () => import('./features/posts/posts.module')
      .then(m => m.PostsFeatureModule)
  },
  {
    path: '**',
    redirectTo: DEFAULT_ROUTE,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
