import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [

  { // Shopping list
    path: 'shopping-list',
    component: ShoppingListComponent
  },

  { // Home
    path: '',
    pathMatch: 'full',
    redirectTo: 'recipes'
  },

  { // 404 error
    path: '404',
    component: ErrorPageComponent,
    data: { message: 'Sorry, page not found!' }
  },

  { // The rest
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
