import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormRatingComponent } from './components/form/rating/rating.component';
import { FormDropdownComponent } from './components/form/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRatingComponent,
    FormDropdownComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
