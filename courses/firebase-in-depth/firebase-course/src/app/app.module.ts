import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// Firebase
import { AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/auth';
import { AngularFirestoreModule, USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/firestore';
import { AngularFireFunctionsModule, USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/functions';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

// App
import { environment } from '../environments/environment';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './about/about.component';
import { EditCourseDialogComponent } from './edit-course-dialog/edit-course-dialog.component';
import { LoginComponent } from './features/login/login.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { CourseComponent } from './features/courses/course/course.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [

    // Core
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Material
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,

    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,

    // App
    AppRoutingModule,

  ],
  declarations: [
    AppComponent,
    AboutComponent,
    CourseComponent,
    CoursesCardListComponent,
    CreateCourseComponent,
    CreateUserComponent,
    EditCourseDialogComponent,
    HomeComponent,
    LoginComponent,
  ],
  providers: [
    // { provide: USE_AUTH_EMULATOR, useValue: environment.useEmulators ? ['localhost', 9099] : undefined },
    // { provide: USE_FIRESTORE_EMULATOR, useValue: environment.useEmulators ? ['localhost', 8080] : undefined },
    // { provide: USE_FUNCTIONS_EMULATOR, useValue: environment.useEmulators ? ['localhost', 5001] : undefined }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
