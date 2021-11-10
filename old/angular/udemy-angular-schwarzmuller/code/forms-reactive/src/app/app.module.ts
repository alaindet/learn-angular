import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LessonReactiveFormComponent } from './lesson-reactive-form/lesson-reactive-form.component';
import { ExerciseReactiveFormComponent } from './exercise-reactive-form/exercise-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonReactiveFormComponent,
    ExerciseReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
