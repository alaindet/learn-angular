import { Component, inject } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

import { MOCK_COURSES, findLessonsByCourseId } from 'src/mocks';

@Component({
  selector: 'app-page-settings',
  templateUrl: './settings.component.html',
  standalone: true,
})
export class SettingsPageComponent {

  private db = inject(Firestore);
  private coursesId = 'courses';
  private lessonsId = 'lessons';

  async onPopulateDatabase() {
    const coursesCollection = collection(this.db, this.coursesId);

    for (const course of MOCK_COURSES) {
      const { id: courseId, ...createCourseDto } = course;
      const courseDoc = await addDoc(coursesCollection, createCourseDto);
      const lessonsCollection = await collection(courseDoc, this.lessonsId);

      for (const lesson of findLessonsByCourseId(courseId)) {
        const { id: lessonId, ...createLessonDto } = lesson;
        await addDoc(lessonsCollection, createLessonDto);
      }
    }
  }
}
