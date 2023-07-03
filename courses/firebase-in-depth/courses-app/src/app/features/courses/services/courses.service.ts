import { Injectable, inject } from '@angular/core';
import { DocumentData, Firestore, OrderByDirection, QueryDocumentSnapshot, QuerySnapshot, addDoc, collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, startAfter, updateDoc, where, writeBatch } from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';

import { convertSnapshots, firebaseQueryToObservable, toSlug } from 'src/app/common/utils';
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

  findCourseBySlug(slug: string): Observable<Course | null> {

    const theQuery = query(
      collection(this.db, 'courses'),
      where('slug', '==', slug),
    );

    return from(
      getDocs(theQuery)
        .then(snaps => snaps.empty ? null : convertSnapshots<Course>(snaps)[0])
    );
  }

  findLessons(
    courseId: string,
    sortDir: OrderByDirection = 'asc',
    afterDocSnapshot: QueryDocumentSnapshot<DocumentData> | 0 = 0,
    pageSize = 2,
  ) {
    const theQuery = query(
      collection(this.db, 'courses', courseId, 'lessons'),
      orderBy('title', sortDir),
      startAfter(afterDocSnapshot),
      limit(pageSize),
    );

    return from(
      getDocs(theQuery).then(snaps => {
        const lessons = convertSnapshots(snaps);
        const lastLessonCursor = snaps.docs[snaps.docs.length - 1];
        return { lessons, lastLessonCursor };
      }),
    );
  }

  getCourseById(courseId: string): Observable<Course | null> {
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
    if (!dto.slug) {
      dto.slug = toSlug(dto.title);
    }

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

    if (!dto.slug) {
      dto.slug = toSlug(dto.title);
    }

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
