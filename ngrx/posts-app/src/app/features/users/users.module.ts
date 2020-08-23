import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersContainerComponent } from './containers/users/users.component';
import { UsersApiService } from './services/users-api.service';
import { UsersService } from './services/users.service';
import { UiBreadcrumbsModule } from './../../shared/ui/components/breadcrumbs/breadcrumbs.module';
import { UiButtonModule } from './../../shared/ui/components/button/button.module';
import { UiCardModule } from './../../shared/ui/components/card/card.module';
import { UiTilesModule } from './../../shared/ui/components/tiles/tiles.module';

const routes: Routes = [
  {
    path: '',
    component: UsersContainerComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),

    UiBreadcrumbsModule,
    UiButtonModule,
    UiCardModule,
    UiTilesModule,
  ],
  declarations: [
    UsersContainerComponent,
  ],
  providers: [
    UsersApiService,
    UsersService,
  ],
})
export class UsersFeatureModule {}
