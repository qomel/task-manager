export type UserRole = 'admin' | 'user';

export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}
