import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { MOCK_COURSES, findLessonsByCourseId } from 'src/mocks';

const imports = [
  NgIf,
  AsyncPipe,
  JsonPipe,
];

@Component({
  selector: 'app-page-settings',
  templateUrl: './settings.component.html',
  standalone: true,
  imports,
})
export class SettingsPageComponent {

  private db = inject(Firestore);
  private coursesCollectionId = 'courses';
  private lessonsCollectionId = 'lessons';
  courses$!: Observable<any[]>;

  async onPopulateDatabase() {
    const coursesCollection = collection(this.db, this.coursesCollectionId);

    for (const course of MOCK_COURSES) {
      const { id: courseId, ...createCourseDto } = course;
      const courseDoc = await addDoc(coursesCollection, createCourseDto);
      const lessonsCollection = await collection(courseDoc, this.lessonsCollectionId);

      for (const lesson of findLessonsByCourseId(courseId)) {
        const { id: lessonId, ...createLessonDto } = lesson;
        await addDoc(lessonsCollection, createLessonDto);
      }
    }
  }

  onFetchFromDatabase() {
    const coursesCollection = collection(this.db, this.coursesCollectionId);
    this.courses$ = collectionData(coursesCollection);
  }
}
