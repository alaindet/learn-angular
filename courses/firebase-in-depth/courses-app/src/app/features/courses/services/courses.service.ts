import { Injectable, inject } from '@angular/core';
import { Firestore, collection, orderBy, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { firebaseQueryToObservable } from 'src/app/common/utils';
import { Course } from 'src/app/core/types/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private db = inject(Firestore);

  loadCoursesByCategory(category: string): Observable<Course[]> {
    return firebaseQueryToObservable(
      query(
        collection(this.db, 'courses'),
        where('categories', 'array-contains', category),
        orderBy('title', 'asc'),
      ),
    );
  }
}
