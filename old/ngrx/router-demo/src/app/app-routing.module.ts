import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'apples',
  },
  {
    path: 'apples',
    loadChildren: () => import('./features/apples/apples.module')
      .then(m => m.ApplesModule),
  },
  {
    path: 'pears',
    loadChildren: () => import('./features/pears/pears.module')
      .then(m => m.PearsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
