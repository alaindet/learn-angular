import { ObjectValues } from '../common';

export const FIREBASE_COLLECTION = {
  COURSES: 'courses',
  LESSONS: 'lessons',
} as const;

export type FirebaseCollection = ObjectValues<typeof FIREBASE_COLLECTION>;
