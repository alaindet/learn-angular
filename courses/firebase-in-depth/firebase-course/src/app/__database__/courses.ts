export type Course = {
  id: number;
  description: string;
  longDescription: string;
  iconUrl: string;
  lessonsCount?: number;
  categories: string[];
  seqNo: number;
  url: string;
  price?: number;
  courseListIcon?: string;
  promo?: boolean;
};

export const COURSES: { [id: number]: Course } = {
  20: {
    id: 20,
    description: 'Firebase & AngularFire In Depth',
    longDescription:
      'Full stack Development with Angular, AngularFire, Firestore, Firebase Storage, Hosting & Cloud Functions.',
    iconUrl:
      'https://angular-university.s3-us-west-1.amazonaws.com/course-images/firebase-course-1.jpg',
    lessonsCount: 10,
    categories: ['BEGINNER'],
    seqNo: 0,
    url: 'serverless-angular',
  },
  19: {
    id: 19,
    description: 'Angular Forms In Depth',
    longDescription:
      'Build complex enterprise data forms with the powerful Angular Forms module',
    iconUrl:
      'https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-forms-course-small.jpg',
    courseListIcon:
      'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
    categories: ['BEGINNER'],
    lessonsCount: 10,
    seqNo: 1,
    url: 'angular-forms-course',
    price: 50,
  },
  18: {
    id: 18,
    description: 'Angular Router In Depth',
    longDescription:
      'Build large-scale Single Page Applications with the powerful Angular Router',
    iconUrl:
      'https://angular-university.s3-us-west-1.amazonaws.com/course-images/angular-router-course.jpg',
    courseListIcon:
      'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
    categories: ['BEGINNER'],
    lessonsCount: 10,
    seqNo: 2,
    url: 'angular-router-course',
    price: 50,
  },
  17: {
    id: 17,
    description: 'Reactive Angular Course',
    longDescription:
      'How to build Angular applications in Reactive style using plain RxJs - Patterns and Anti-Patterns',
    iconUrl:
      'https://angular-university.s3-us-west-1.amazonaws.com/course-images/reactive-angular-course.jpg',
    courseListIcon:
      'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
    categories: ['BEGINNER'],
    lessonsCount: 10,
    seqNo: 3,
    url: 'reactive-angular-course',
    price: 50,
  },
  3: {
    id: 3,
    description: 'RxJs In Practice Course',
    longDescription:
      'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
    courseListIcon:
      'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
    categories: ['BEGINNER'],
    lessonsCount: 10,
    seqNo: 4,
    url: 'rxjs-course',
    price: 50,
  },
  4: {
    id: 4,
    description: 'NgRx (with NgRx Data) - The Complete Guide',
    longDescription:
      'Learn the modern Ngrx Ecosystem, including NgRx Data, Store, Effects, Router Store, Ngrx Entity, and Dev Tools.',
    iconUrl:
      'https://angular-university.s3-us-west-1.amazonaws.com/course-images/ngrx-v2.png',
    categories: ['BEGINNER'],
    lessonsCount: 10,
    seqNo: 5,
    url: 'ngrx-course',
    promo: false,
    price: 50,
  },
  2: {
    id: 2,
    description: 'Angular Core Deep Dive',
    longDescription:
      'A detailed walk-through of the most important part of Angular - the Core and Common modules',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
    lessonsCount: 10,
    categories: ['BEGINNER'],
    seqNo: 6,
    url: 'angular-core-course',
    price: 50,
  },
  5: {
    id: 5,
    description: 'Angular for Beginners',
    longDescription:
      "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
    iconUrl:
      'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
    courseListIcon:
      'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
    categories: ['BEGINNER'],
    lessonsCount: 10,
    seqNo: 7,
    url: 'angular-for-beginners',
    price: 50,
  },
  12: {
    id: 12,
    description: 'Angular Testing Course',
    longDescription:
      'In-depth guide to Unit Testing and E2E Testing of Angular Applications',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-testing-small.png',
    categories: ['BEGINNER'],
    seqNo: 8,
    url: 'angular-testing-course',
    lessonsCount: 10,
    promo: false,
    price: 50,
  },
  16: {
    id: 16,
    description: 'Stripe Payments In Practice',
    longDescription:
      'Build your own ecommerce store & membership website with Firebase, Stripe and Express',
    iconUrl:
      'https://angular-university.s3-us-west-1.amazonaws.com/course-images/stripe-course.jpg',
    lessonsCount: 10,
    categories: ['BEGINNER'],
    seqNo: 10,
    url: 'stripe-course',
    price: 50,
  },
  14: {
    id: 14,
    description: 'NestJs In Practice (with MongoDB)',
    longDescription:
      'Build a modern REST backend using Typescript, MongoDB and the familiar Angular API.',
    iconUrl:
      'https://angular-university.s3-us-west-1.amazonaws.com/course-images/nestjs-v2.png',
    categories: ['BEGINNER'],
    lessonsCount: 10,
    seqNo: 11,
    url: 'nestjs-course',
    promo: false,
    price: 50,
  },
  6: {
    id: 6,
    description: 'Angular Security Course - Web Security Fundamentals',
    longDescription:
      'Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
    courseListIcon:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/lock-v2.png',
    categories: ['ADVANCED'],
    lessonsCount: 11,
    seqNo: 12,
    url: 'angular-security-course',
    price: 50,
  },
  7: {
    id: 7,
    description: 'Angular PWA - Progressive Web Apps Course',
    longDescription:
      'Learn Angular Progressive Web Applications, build the future of the Web Today.',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
    courseListIcon:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/alien.png',
    categories: ['ADVANCED'],
    lessonsCount: 8,
    seqNo: 14,
    url: 'angular-pwa-course',
    price: 50,
  },
  8: {
    id: 8,
    description: 'Angular Advanced Library Laboratory: Build Your Own Library',
    longDescription:
      'Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm',
    iconUrl:
      'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
    courseListIcon:
      'https://angular-academy.s3.amazonaws.com/thumbnails/angular-advanced-lesson-icon.png',
    categories: ['ADVANCED'],
    seqNo: 15,
    url: 'angular-advanced-course',
    price: 50,
  },
  9: {
    id: 9,
    description: 'The Complete Typescript Course',
    longDescription:
      'Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.',
    iconUrl:
      'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
    courseListIcon:
      'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-lesson.png',
    categories: ['BEGINNER'],
    seqNo: 16,
    url: 'typescript-course',
    price: 50,
  },
  11: {
    id: 11,
    description: 'Angular Material Course',
    longDescription:
      'Build Applications with the official Angular Widget Library',
    iconUrl:
      'https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png',
    categories: ['BEGINNER'],
    seqNo: 17,
    url: 'angular-material-course',
    price: 50,
  },
};

export function findCourseById(courseId: number) {
  return COURSES[courseId];
}
