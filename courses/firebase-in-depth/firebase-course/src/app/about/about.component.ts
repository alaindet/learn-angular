import { Component } from '@angular/core';
import 'firebase/firestore'; // ???
import { AngularFirestore } from '@angular/fire/firestore';

import { FIREBASE_COLLECTION } from '../core';
import { COURSES, findLessonsByCourseId } from '../__database__';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {

  constructor(
    private db: AngularFirestore,
  ) {}

  async uploadData() {
    const coursesCollection = this.db.collection(FIREBASE_COLLECTION.COURSES);
    for (let course of Object.values(COURSES)) {

      // Create new course
      const { id, ...newCourse } = course;
      const courseRef = await coursesCollection.add(newCourse);

      const courseLessonsCollection = await courseRef.collection(FIREBASE_COLLECTION.LESSONS);
      const courseLessons = findLessonsByCourseId(course['id']);

      for (const lesson of courseLessons) {
        const { id, courseId, ...newLesson } = lesson;
        await courseLessonsCollection.add(newLesson);
      }
    }
  }
}
