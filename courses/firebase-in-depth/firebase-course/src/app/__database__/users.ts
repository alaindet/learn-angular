export type User = {
  id: number;
  email: string;
  password: string;
  pictureUrl: string;
};

export const USERS: { [id: number]: User } = {
  1: {
    id: 1,
    email: 'test@angular-university.io',
    password: 'test',
    pictureUrl: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
  },
};
