import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDoc, getDocs, orderBy, query, updateDoc, where, writeBatch } from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';

import { firebaseQueryToObservable } from 'src/app/common/utils';
import { Course, WriteCourseDto } from 'src/app/core/types/courses';

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

  getCourse(courseId: string): Observable<Course | null> {
    const courseRef = doc(this.db, 'courses', courseId);
    return from(
      getDoc(courseRef).then(doc => {

        if (!doc.exists()) {
          return null;
        }

        return { id: doc.id, ...doc.data() } as Course;
      })
    );
  }

  // Create a new course with no lessons assigned to it
  createCourse(dto: WriteCourseDto): Observable<Course> {
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

  updateCourse(courseId: string, dto: WriteCourseDto): Observable<void> {
    const courseRef = doc(this.db, 'courses', courseId);
    return from(updateDoc(courseRef, dto));
  }

  // TODO: Please avoid removing courses with attaches lessons via the web app
  removeCourse(courseId: Course['id']): Observable<void> {

    const batch = writeBatch(this.db);
    const courseRef = doc(this.db, 'courses', courseId);
    batch.delete(courseRef);
    const lessonsRef = collection(this.db, 'courses', courseId, 'lessons');

    return from(
      getDocs(lessonsRef)
        .then(lessonSnaps => lessonSnaps.forEach(snap => batch.delete(snap.ref)))
        .then(() => batch.commit())
    );
  }
}
