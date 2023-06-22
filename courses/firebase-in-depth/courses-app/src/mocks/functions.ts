import { Course } from 'src/app/core/types/courses';
import { Lesson } from 'src/app/core/types/lessons';
import { User } from 'src/app/core/types/users';
import { MOCK_COURSES } from './courses';
import { MOCK_LESSONS } from './lessons';
import { MOCK_USERS } from './users';

export function findCourseById(courseId: Course['id']): Course | null {
  return MOCK_COURSES.find(c => c.id === courseId) ?? null;
}

export function findLessonsByCourseId(courseId: Course['id']): Lesson[] {
  return MOCK_LESSONS.filter(l => l.courseId === courseId);
}

export function authenticate(email: string, password: string): User | null {
  const user = MOCK_USERS.find(u => u.email === email) ?? null;
  if (!user) return null;
  if (user.password !== password) return null;
  return user;
}
