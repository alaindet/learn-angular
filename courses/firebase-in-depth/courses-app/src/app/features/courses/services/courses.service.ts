import { Injectable, inject } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { DocumentData, DocumentReference, Firestore, addDoc, collection, doc, getDoc, orderBy, query, where } from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';

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
  createCourse(dto: CreateCourseDto): Observable<Course> {
    const coursesRef = collection(this.db, 'courses');

    let id!: string;

    return from(
      addDoc(coursesRef, dto)
        .then(courseRef => {
          id = courseRef.id;
          return getDoc(courseRef);
        })
        .then(courseDoc => {
          return { id, ...courseDoc.data() } as Course;
        })
    );
  }
}
