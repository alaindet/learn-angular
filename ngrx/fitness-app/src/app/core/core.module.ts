import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './components/header/header.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  declarations: [
    HeaderComponent,
    SidenavListComponent,
  ],
  exports: [
    HeaderComponent,
    SidenavListComponent,
  ],
})
export class CoreModule {}
