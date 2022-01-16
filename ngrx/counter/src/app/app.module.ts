import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { store } from 'src/app/core/store';
import { CounterComponentModule } from 'src/app/common/components';
import { CounterSubjectFeatureModule } from 'src/app/features/counter-subject';
import { CounterStoreFeatureModule } from 'src/app/features/counter-store';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot(store),
    CounterComponentModule,
    CounterSubjectFeatureModule,
    CounterStoreFeatureModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
