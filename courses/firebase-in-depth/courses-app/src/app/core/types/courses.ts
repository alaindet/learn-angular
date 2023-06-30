export type Course = {
  id: string;
  title: string;
  description: string;
  categories: string[];
};

export type CreateCourseDto = Omit<Course, 'id'>;
