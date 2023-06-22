import { Course } from './courses';

export type Lesson = {
  id: number;
  courseId: Course['id'];
  title: string;
  duration: string;
};
