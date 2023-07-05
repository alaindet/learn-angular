export const COURSE_CATEGORY = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
} as const;

export type CourseCategory = typeof COURSE_CATEGORY[keyof typeof COURSE_CATEGORY];

export type Course = {
  id: string;
  title: string;
  slug: string;
  description: string;
  categories: string[];
};

export type WriteCourseDto = Omit<Course, 'id'>;
