import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormRatingComponent } from './components/form/rating/rating.component';
import { FormInputComponent } from './components/form/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    FormRatingComponent,
    FormInputComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
