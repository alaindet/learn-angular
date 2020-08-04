import { Link } from 'src/app/core/models/link.interface';

export const LINKS: Link[] = [
  {
    path: '/signup',
    label: 'Signup',
    icon: 'account_circle',
    onAuth: false,
  },
  {
    path: '/login',
    label: 'Login',
    icon: 'login',
    onAuth: false,
  },
  {
    path: '/training',
    label: 'Training',
    icon: 'fitness_center',
    onAuth: true,
  }
];
