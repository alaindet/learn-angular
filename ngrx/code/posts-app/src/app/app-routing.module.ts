import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { environment } from 'src/environments/environment';

const DEFAULT_ROUTE = '/posts';

let routes: Routes = [
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

if (!environment.production) {

  const route: Route = {
    path: 'demo',
    loadChildren: () => import('./shared/ui/demo/demo.module')
      .then(m => m.UiDemoModule),
  };

  routes = [
    ...routes.slice(0, routes.length - 1),
    route,
    ...routes.slice(routes.length - 1),
  ];
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
