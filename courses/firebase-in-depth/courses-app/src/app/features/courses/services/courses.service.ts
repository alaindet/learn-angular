import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';

import { Course } from 'src/app/core/types/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private db = inject(Firestore);

  loadCoursesByCategory(category: string): Observable<Course[]> {
    const coursesRef = collection(this.db, 'courses');
    const search = query(coursesRef, where('categories', 'array-contains', category));

    return from(getDocs(search).then(snapshots => {

      if (snapshots.empty) {
        return [];
      }

      const courses: Course[] = [];
      snapshots.forEach(doc => {
        const course = doc.data() as Course;
        courses.push(course);
      });

      return courses;
    }));
  }
}
