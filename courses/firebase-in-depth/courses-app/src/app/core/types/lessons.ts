import { Course } from './courses';

export type Lesson = {
  id: string;
  courseId: Course['id'];
  title: string;
  duration: string;
};
