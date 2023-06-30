import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, orderBy, query, where } from '@angular/fire/firestore';
import { Observable, firstValueFrom, from, of } from 'rxjs';

import { firebaseQueryToObservable } from 'src/app/common/utils';
import { Course, CreateCourseDto } from 'src/app/core/types/courses';

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

  // Create a new course with no lessons assigned to it
  createCourse(dto: CreateCourseDto): Observable<any> {
    const coursesRef = collection(this.db, 'courses');
    return from(addDoc(coursesRef, dto));
  }
}
