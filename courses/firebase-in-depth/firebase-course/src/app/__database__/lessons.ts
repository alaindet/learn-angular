export type Lesson = {
  id: number;
  description: string;
  duration: string;
  seqNo: number;
  courseId: number;
  videoId?: string;
};

export const LESSONS: { [id: number]: Lesson } = {
  1: {
    id: 1,
    description:
      'Angular Tutorial For Beginners - Build Your First App - Hello World Step By Step',
    duration: '4:17',
    seqNo: 1,
    courseId: 5,
  },
  2: {
    id: 2,
    description: 'Building Your First  Component - Component Composition',
    duration: '2:07',
    seqNo: 2,
    courseId: 5,
  },
  3: {
    id: 3,
    description: 'Component @Input - How To Pass Input Data To an  Component',
    duration: '2:33',
    seqNo: 3,
    courseId: 5,
  },
  4: {
    id: 4,
    description: ' Component Events - Using @Output to create custom events',
    duration: '4:44',
    seqNo: 4,
    courseId: 5,
  },
  5: {
    id: 5,
    description: ' Component Templates - Inline Vs External',
    duration: '2:55',
    seqNo: 5,
    courseId: 5,
  },
  6: {
    id: 6,
    description: 'Styling  Components - Learn About Component Style Isolation',
    duration: '3:27',
    seqNo: 6,
    courseId: 5,
  },
  7: {
    id: 7,
    description: ' Component Interaction - Extended Components Example',
    duration: '9:22',
    seqNo: 7,
    courseId: 5,
  },
  8: {
    id: 8,
    description: ' Components Tutorial For Beginners - Components Exercise !',
    duration: '1:26',
    seqNo: 8,
    courseId: 5,
  },
  9: {
    id: 9,
    description:
      ' Components Tutorial For Beginners - Components Exercise Solution Inside',
    duration: '2:08',
    seqNo: 9,
    courseId: 5,
  },
  10: {
    id: 10,
    description:
      ' Directives - Inputs, Output Event Emitters and How To Export Template References',
    duration: '4:01',
    seqNo: 10,
    courseId: 5,
  },

  // Security Course
  11: {
    id: 11,
    description: 'Course Helicopter View',
    duration: '08:19',
    seqNo: 1,
    courseId: 6,
  },

  12: {
    id: 12,
    description: 'Installing Git, Node, NPM and Choosing an IDE',
    duration: '04:17',
    seqNo: 2,
    courseId: 6,
  },

  13: {
    id: 13,
    description:
      'Installing The Lessons Code - Learn Why Its Essential To Use NPM 5',
    duration: '06:05',
    seqNo: 3,
    courseId: 6,
  },

  14: {
    id: 14,
    description: 'How To Run Node In TypeScript With Hot Reloading',
    duration: '03:57',
    seqNo: 4,
    courseId: 6,
  },

  15: {
    id: 15,
    description: 'Guided Tour Of The Sample Application',
    duration: '06:00',
    seqNo: 5,
    courseId: 6,
  },
  16: {
    id: 16,
    description: 'Client Side Authentication Service - API Design',
    duration: '04:53',
    seqNo: 6,
    courseId: 6,
  },
  17: {
    id: 17,
    description: 'Client Authentication Service - Design and Implementation',
    duration: '09:14',
    seqNo: 7,
    courseId: 6,
  },
  18: {
    id: 18,
    description:
      'The New Angular HTTP Client - Doing a POST Call To The Server',
    duration: '06:08',
    seqNo: 8,
    courseId: 6,
  },
  19: {
    id: 19,
    description: 'User Sign Up Server-Side Implementation in Express',
    duration: '08:50',
    seqNo: 9,
    courseId: 6,
  },
  20: {
    id: 20,
    description: 'Introduction To Cryptographic Hashes - A Running Demo',
    duration: '05:46',
    seqNo: 10,
    courseId: 6,
  },
  21: {
    id: 21,
    description:
      'Some Interesting Properties Of Hashing Functions - Validating Passwords',
    duration: '06:31',
    seqNo: 11,
    courseId: 6,
  },

  // PWA course

  22: {
    id: 22,
    description:
      'Course Kick-Off - Install Node, NPM, IDE And Service Workers Section Code',
    duration: '07:19',
    seqNo: 1,
    courseId: 7,
  },
  23: {
    id: 23,
    description: 'Service Workers In a Nutshell - Service Worker Registration',
    duration: '6:59',
    seqNo: 2,
    courseId: 7,
  },
  24: {
    id: 24,
    description:
      'Service Workers Hello World - Lifecycle Part 1 and PWA Chrome Dev Tools',
    duration: '7:28',
    seqNo: 3,
    courseId: 7,
  },
  25: {
    id: 25,
    description:
      'Service Workers and Application Versioning - Install & Activate Lifecycle Phases',
    duration: '10:17',
    seqNo: 4,
    courseId: 7,
  },

  26: {
    id: 26,
    description:
      'Downloading The Offline Page - The Service Worker Installation Phase',
    duration: '09:50',
    seqNo: 5,
    courseId: 7,
  },
  27: {
    id: 27,
    description: 'Introduction to the Cache Storage PWA API',
    duration: '04:44',
    seqNo: 6,
    courseId: 7,
  },
  28: {
    id: 28,
    description: 'View Service Workers HTTP Interception Features In Action',
    duration: '06:07',
    seqNo: 7,
    courseId: 7,
  },
  29: {
    id: 29,
    description: 'Service Workers Error Handling - Serving The Offline Page',
    duration: '5:38',
    seqNo: 8,
    courseId: 7,
  },

  // Firebase & AngularFire Course

  30: {
    id: 30,
    description: 'Development Environment Setup',
    duration: '5:38',
    seqNo: 1,
    courseId: 20,
  },

  31: {
    id: 31,
    description: 'Introduction to the Firebase Ecosystem',
    duration: '5:12',
    seqNo: 2,
    courseId: 20,
  },

  32: {
    id: 32,
    description: 'Importing Data into Firestore',
    duration: '4:07',
    seqNo: 3,
    courseId: 20,
  },

  33: {
    id: 33,
    description: 'Firestore Documents in Detail',
    duration: '7:32',
    seqNo: 4,
    courseId: 20,
  },

  34: {
    id: 34,
    description: 'Firestore Collections in Detail',
    duration: '6:28',
    seqNo: 5,
    courseId: 20,
  },

  35: {
    id: 35,
    description: 'Firestore Unique Identifiers',
    duration: '4:38',
    seqNo: 6,
    courseId: 20,
  },

  36: {
    id: 36,
    description: 'Querying Firestore Collections',
    duration: '7:54',
    seqNo: 7,
    courseId: 20,
  },

  37: {
    id: 37,
    description: 'Firebase Security Rules In Detail',
    duration: '5:31',
    seqNo: 8,
    courseId: 20,
  },

  38: {
    id: 38,
    description: 'Firebase Cloud Functions In Detail',
    duration: '8:19',
    seqNo: 9,
    courseId: 20,
  },

  39: {
    id: 39,
    description: 'Firebase Storage In Detail',
    duration: '7:05',
    seqNo: 10,
    courseId: 20,
  },

  // Angular Testing Course

  40: {
    id: 40,
    description: 'Angular Testing Course - Helicopter View',
    duration: '5:38',
    seqNo: 1,
    courseId: 12,
  },

  41: {
    id: 41,
    description: 'Setting Up the Development Environment',
    duration: '5:12',
    seqNo: 2,
    courseId: 12,
  },

  42: {
    id: 42,
    description: 'Introduction to Jasmine, Spies and specs',
    duration: '4:07',
    seqNo: 3,
    courseId: 12,
  },

  43: {
    id: 43,
    description: 'Introduction to Service Testing',
    duration: '7:32',
    seqNo: 4,
    courseId: 12,
  },

  44: {
    id: 44,
    description: 'Settting up the Angular TestBed',
    duration: '6:28',
    seqNo: 5,
    courseId: 12,
  },

  45: {
    id: 45,
    description: 'Mocking Angular HTTP requests',
    duration: '4:38',
    seqNo: 6,
    courseId: 12,
  },

  46: {
    id: 46,
    description: 'Simulating Failing HTTP Requests',
    duration: '7:54',
    seqNo: 7,
    courseId: 12,
  },

  47: {
    id: 47,
    description: 'Introduction to Angular Component Testing',
    duration: '5:31',
    seqNo: 8,
    courseId: 12,
  },

  48: {
    id: 48,
    description: 'Testing Angular Components without the DOM',
    duration: '8:19',
    seqNo: 9,
    courseId: 12,
  },

  49: {
    id: 49,
    description: 'Testing Angular Components with the DOM',
    duration: '7:05',
    seqNo: 10,
    courseId: 12,
  },

  // Ngrx Course
  50: {
    id: 50,
    description: 'Welcome to the Angular Ngrx Course',
    duration: '6:53',
    seqNo: 1,
    courseId: 4,
  },
  51: {
    id: 51,
    description: 'The Angular Ngrx Architecture Course - Helicopter View',
    duration: '5:52',
    seqNo: 2,
    courseId: 4,
  },
  52: {
    id: 52,
    description:
      'The Origins of Flux - Understanding the Famous Facebook Bug Problem',
    duration: '8:17',
    seqNo: 3,
    courseId: 4,
  },
  53: {
    id: 53,
    description: "Custom Global Events - Why Don't They Scale In Complexity?",
    duration: '7:47',
    seqNo: 4,
    courseId: 4,
  },
  54: {
    id: 54,
    description:
      'The Flux Architecture - How Does it Solve Facebook Counter Problem?',
    duration: '9:22',
    seqNo: 5,
    courseId: 4,
  },
  55: {
    id: 55,
    description: 'Unidirectional Data Flow And The Angular Development Mode',
    duration: '7:07',
    seqNo: 6,
    courseId: 4,
  },

  56: {
    id: 56,
    description: 'Dispatching an Action - Implementing the Login Component',
    duration: '4:39',
    seqNo: 7,
    courseId: 4,
  },
  57: {
    id: 57,
    description: 'Setting Up the Ngrx DevTools - Demo',
    duration: '4:44',
    seqNo: 8,
    courseId: 4,
  },
  58: {
    id: 58,
    description: 'Understanding Reducers - Writing Our First Reducer',
    duration: '9:10',
    seqNo: 9,
    courseId: 4,
  },
  59: {
    id: 59,
    description: 'How To Define the Store Initial State',
    duration: '9:10',
    seqNo: 10,
    courseId: 4,
  },

  // NestJs Course

  60: {
    id: 60,
    description: 'Introduction to NestJs',
    duration: '4:29',
    seqNo: 1,
    courseId: 14,
  },
  61: {
    id: 61,
    description: 'Development Environment Setup',
    duration: '6:37',
    seqNo: 2,
    courseId: 14,
  },
  62: {
    id: 62,
    description: 'Setting up a MongoDB Database',
    duration: '6:38',
    seqNo: 3,
    courseId: 14,
  },
  63: {
    id: 63,
    description: 'CRUD with NestJs - Controllers and Repositories',
    duration: '12:12',
    seqNo: 4,
    courseId: 14,
  },
  64: {
    id: 64,
    description: 'First REST endpoint - Get All Courses',
    duration: '3:42',
    seqNo: 5,
    courseId: 14,
  },
  65: {
    id: 65,
    description: 'Error Handling',
    duration: '5:15',
    seqNo: 6,
    courseId: 14,
  },
  66: {
    id: 66,
    description: 'NestJs Middleware',
    duration: '7:08',
    seqNo: 7,
    courseId: 14,
  },
  67: {
    id: 67,
    description: 'Authentication in NestJs',
    duration: '13:22',
    seqNo: 8,
    courseId: 14,
  },
  68: {
    id: 68,
    description: 'Authorization in NestJs',
    duration: '6:43',
    seqNo: 9,
    courseId: 14,
  },
  69: {
    id: 69,
    description: 'Guards & Interceptors',
    duration: '8:16',
    seqNo: 10,
    courseId: 14,
  },

  // Stripe Course

  70: {
    id: 70,
    description: 'Introduction to Stripe Payments',
    duration: '03:45',
    seqNo: 0,
    courseId: 16,
  },
  71: {
    id: 71,
    description: 'The advantages of Stripe Checkout',
    duration: '08:36',
    seqNo: 1,
    courseId: 16,
  },
  72: {
    id: 72,
    description: 'Setting up the development environment',
    duration: '09:10',
    seqNo: 2,
    courseId: 16,
  },
  73: {
    id: 73,
    description: 'Creating a server Checkout Session',
    duration: '07:20',
    seqNo: 3,
    courseId: 16,
  },
  74: {
    id: 74,
    description: 'Redirecting to the Stripe Checkout page',
    duration: '11:47',
    seqNo: 4,
    courseId: 16,
  },
  75: {
    id: 75,
    description: 'Order fulfillment webhook',
    duration: '06:30',
    seqNo: 5,
    courseId: 16,
  },
  76: {
    id: 76,
    description: 'Installing the Stripe CLI',
    duration: '4:13',
    seqNo: 6,
    courseId: 16,
  },
  77: {
    id: 77,
    description: 'Firestore Security Rules for protecting Premium content',
    duration: '05:47',
    seqNo: 7,
    courseId: 16,
  },
  78: {
    id: 78,
    description: 'Stripe Subscriptions with Stripe Checkout',
    duration: '05:17',
    seqNo: 8,
    courseId: 16,
  },
  79: {
    id: 79,
    description: 'Stripe Subscription Fulfillment',
    duration: '07:50',
    seqNo: 9,
    courseId: 16,
  },

  // Reactive Angular Course

  80: {
    id: 80,
    description: 'Introduction to Reactive Programming',
    duration: '03:45',
    seqNo: 0,
    courseId: 17,
    videoId: 'Df1QnesgB_s',
  },
  81: {
    id: 81,
    description: 'Introduction to RxJs',
    duration: '08:36',
    seqNo: 1,
    courseId: 17,
    videoId: '8m5RrAtqlyw',
  },
  82: {
    id: 82,
    description: 'Setting up the development environment',
    duration: '09:10',
    seqNo: 2,
    courseId: 17,
    videoId: '3fDbUB-nKqc',
  },
  83: {
    id: 83,
    description: 'Designing and building a Service Layer',
    duration: '07:20',
    seqNo: 3,
    courseId: 17,
    videoId: '',
  },
  84: {
    id: 84,
    description: 'Stateless Observable Services',
    duration: '11:47',
    seqNo: 4,
    courseId: 17,
    videoId: 'qvDPnRs_ZPA',
  },
  85: {
    id: 85,
    description: 'Smart vs Presentational Components',
    duration: '06:30',
    seqNo: 5,
    courseId: 17,
    videoId: '5bsZJGAelFM',
  },
  86: {
    id: 86,
    description: 'Lightweight state management',
    duration: '4:13',
    seqNo: 6,
    courseId: 17,
    videoId: '9m3_HHeP9Ko',
  },
  87: {
    id: 87,
    description: 'Event bubbling anti-pattern',
    duration: '05:47',
    seqNo: 7,
    courseId: 17,
    videoId: 'PRQCAL_RMVo',
  },
  88: {
    id: 88,
    description: 'Master detail with cached master table',
    duration: '05:17',
    seqNo: 8,
    courseId: 17,
    videoId: 'du4ib4jBUG0',
  },
  89: {
    id: 89,
    description: 'Error handling',
    duration: '07:50',
    seqNo: 9,
    courseId: 17,
    videoId: '8m5RrAtqlyw',
  },

  // Angular Router Course
  90: {
    id: 90,
    description: 'What is a Single Page Application?',
    duration: '04:00',
    seqNo: 1,
    courseId: 18,
    videoId: 'VES1eTNxi1s',
  },
  91: {
    id: 91,
    description: 'Setting Up The Development Environment',
    duration: '06:05',
    seqNo: 2,
    courseId: 18,
    videoId: 'ANfplcxnl78',
  },
  92: {
    id: 92,
    description: 'Angular Router Setup',
    duration: '02:36',
    seqNo: 3,
    courseId: 18,
    videoId: '9ez72LAd6mM',
  },
  93: {
    id: 93,
    description: 'Configuring a Home Route and Fallback Route',
    duration: '02:55',
    seqNo: 4,
    courseId: 18,
    videoId: 'Clj-jZpl64w',
  },
  94: {
    id: 94,
    description:
      'Styling Active Routes With The routerLinkActive And routerLinkActiveOptions',
    duration: '07:50',
    seqNo: 5,
    courseId: 18,
    videoId: 'zcgnsmPVc30',
  },
  95: {
    id: 95,
    description: 'Child Routes - How To Setup a Master Detail Route',
    duration: '04:10',
    seqNo: 6,
    courseId: 18,
    videoId: 'zcgnsmPVc30',
  },
  96: {
    id: 96,
    description: 'Programmatic Router Navigation via the Router API ',
    duration: '03:59',
    seqNo: 7,
    courseId: 18,
    videoId: 'VES1eTNxi1s',
  },
  97: {
    id: 97,
    description: 'Relative And Absolute Router Navigation',
    duration: '04:58',
    seqNo: 8,
    courseId: 18,
    videoId: 'MQl9Zs3QqGM',
  },
  98: {
    id: 98,
    description: 'Master Detail Navigation And Route Parameters',
    duration: '06:03',
    seqNo: 9,
    courseId: 18,
    videoId: 'ANfplcxnl78',
  },

  99: {
    id: 99,
    description: 'The Route Parameters Observable',
    duration: '06:50',
    seqNo: 10,
    courseId: 18,
    videoId: 'zcgnsmPVc30',
  },
  100: {
    id: 100,
    description: 'Optional Route Query Parameters',
    duration: '03:03',
    seqNo: 11,
    courseId: 18,
    videoId: '0Qsg8fyKwO4',
  },
  101: {
    id: 101,
    description:
      'The queryParams Directive and the Query Parameters Observable',
    duration: '07:50',
    seqNo: 12,
    courseId: 18,
    videoId: 'VES1eTNxi1s',
  },
  102: {
    id: 102,
    description: 'Exiting an Angular Route - How To Prevent Memory Leaks',
    duration: '07:50',
    seqNo: 13,
    courseId: 18,
    videoId: 'ANfplcxnl78',
  },
  103: {
    id: 103,
    description: 'CanDeactivate Route Guard',
    duration: '04:50',
    seqNo: 14,
    courseId: 18,
    videoId: '9ez72LAd6mM',
  },
  104: {
    id: 104,
    description:
      'CanActivate Route Guard - An Example of An Asynchronous Route Guard',
    duration: '03:32',
    seqNo: 15,
    courseId: 18,
    videoId: 'Clj-jZpl64w',
  },

  105: {
    id: 105,
    description: 'Configure Auxiliary Routes in the Angular Router',
    duration: '05:16',
    seqNo: 16,
    courseId: 18,
    videoId: 'zcgnsmPVc30',
  },

  106: {
    id: 106,
    description: 'Angular Auxiliary Routes - How To Pass Router Parameters',
    duration: '07:50',
    seqNo: 17,
    courseId: 18,
    videoId: 'yjQUkNHb1Is',
  },
  107: {
    id: 107,
    description: 'Angular Router Redirects and Path Matching',
    duration: '02:59',
    seqNo: 18,
    courseId: 18,
    videoId: 'VES1eTNxi1s',
  },
  108: {
    id: 108,
    description: 'Angular Router Hash Location Strategy',
    duration: '07:50',
    seqNo: 19,
    courseId: 18,
    videoId: 'MQl9Zs3QqGM',
  },
  109: {
    id: 109,
    description: 'Angular Router Lazy Loading and Shared Modules',
    duration: '08:45',
    seqNo: 20,
    courseId: 18,
    videoId: '0Qsg8fyKwO4',
  },
  110: {
    id: 110,
    description: 'Exercise - Implement a Widget Dashboard',
    duration: '07:50',
    seqNo: 21,
    courseId: 18,
    videoId: 'VES1eTNxi1s',
  },
  111: {
    id: 111,
    description: 'Exercise Solution ',
    duration: '07:50',
    seqNo: 22,
    courseId: 18,
    videoId: '0Qsg8fyKwO4',
  },
};

export function findLessonsByCourseId(courseId: number) {
  return Object.values(LESSONS).filter(lesson => lesson.courseId == courseId);
}
