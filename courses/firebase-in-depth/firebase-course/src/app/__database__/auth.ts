import { USERS, User } from './users';

export function authenticate(email: string, password: string): User {
  const user: User | undefined = Object.values(USERS).find(u => u.email === email);
  if (!user) return undefined;
  if (user.password !== password) return undefined;
  return user;
}
