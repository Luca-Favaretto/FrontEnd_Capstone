import { User } from './user';

export interface Task {
  id: string;
  title: string;
  description: string;
  expirationDate: string;
  user: User;
}
