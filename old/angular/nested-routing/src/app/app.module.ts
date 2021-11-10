import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooComponent } from './pages/foo.component';
import { FooFirstChildComponent } from './pages/foo-first-child.component';
import { FooSecondChildComponent } from './pages/foo-second-child.component';
import { BarComponent } from './pages/bar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'foo',
  },
  {
    path: 'foo',
    component: FooComponent,
    children: [
      {
        path: 'first',
        component: FooFirstChildComponent,
      },
      {
        path: 'second',
        component: FooSecondChildComponent,
      },
    ],
  },
  {
    path: 'bar',
    component: BarComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FooComponent,
    FooFirstChildComponent,
    FooSecondChildComponent,
    BarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
