import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, where, getDocs, onSnapshot } from '@angular/fire/firestore';
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

  async onSearchNestedCollection() {
    const coursesRef = collection(this.db, 'courses');
    const search = query(coursesRef, where('title', '==', 'Course #1'));
    const results = await getDocs(search);

    if (results.empty) {
      console.log('No results');
      return;
    }

    console.log(results.docs[0].data());
  }

  onFetchNestedCollection() {
    const courseId = 'CHAQenIKBCfo6dZd9JMU'; // TODO: Change
    const lessonsRef = collection(this.db, `/courses/${courseId}/lessons`);
    const lessons = collectionData(lessonsRef);
    lessons.subscribe(lessons => console.log('lessons', lessons));
  }

  onListenToDataChange() {
    const coursesRef = collection(this.db, this.coursesCollectionId);
    this.courses$ = collectionData(coursesRef);

    console.log('This query listens to data changes upon the "courses" collection');

    const unsubscribe = onSnapshot(
      coursesRef,
      docs => {
        const courses: any[] = [];
        docs.forEach(doc => courses.push(doc.data()));
        console.log('Courses updated', courses);
      },
      error => {
        console.error(error);
      },
    );

    /*
    import { collection, query, where, onSnapshot } from "firebase/firestore";

    const q = query(collection(db, "cities"), where("state", "==", "CA"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
          cities.push(doc.data().name);
      });
      console.log("Current cities in CA: ", cities.join(", "));
    });
    */
  }
}
