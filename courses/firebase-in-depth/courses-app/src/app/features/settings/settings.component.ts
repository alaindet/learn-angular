import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, where, getDocs } from '@angular/fire/firestore';
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

  async onFetchFromDatabase() {
    const coursesCollection = collection(this.db, this.coursesCollectionId);
    this.courses$ = collectionData(coursesCollection);
  }

  async onSearchDatabase() {
    const coursesCollection = collection(this.db, this.coursesCollectionId);
    const search = query(coursesCollection, where('title', '==', 'Course #2'));
    const resultSnapshots = await getDocs(search);

    if (resultSnapshots.empty) {
      console.log('No results');
    } else {
      resultSnapshots.forEach(result => {
        console.log(result.id, result.data());
      });
    }
  }
}
