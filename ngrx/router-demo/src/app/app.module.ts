import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { reducers, storeDevtoolsConfig } from './store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(storeDevtoolsConfig),
    StoreRouterConnectingModule.forRoot(), // TODO: Add config
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
