import { Course } from 'src/app/core/types/courses';

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Starting with Foo',
    slug: 'starting-with-foo',
    description: 'Beginnes course to get started with Foo',
    categories: ['Beginner'],
  },
  {
    id: '2',
    title: 'Getting better at Foo',
    slug: 'getting-better-at-foo',
    description: 'One of those useless intermediate courses',
    categories: ['Intermediate'],
  },
  {
    id: '3',
    title: 'Pro Foo Programming',
    slug: 'pro-foo-programming',
    description: 'This is supposed to be an advanced course',
    categories: ['Advanced'],
  },
];
