import { MOCK_COURSES, Course } from './courses';
import { Lesson, MOCK_LESSONS } from './lessons';
import { USERS, User } from './users';

export function findCourseById(courseId: Course['id']): Course | null {
  return MOCK_COURSES.find(c => c.id === courseId) ?? null;
}

export function findLessonsByCourseId(courseId: Course['id']): Lesson[] {
  return MOCK_LESSONS.filter(l => l.courseId === courseId);
}

export function authenticate(email: string, password: string): User | null {
  const user = USERS.find(u => u.email === email) ?? null;
  if (!user) return null;
  if (user.password !== password) return null;
  return user;
}
