import { User } from './user';

export interface Result {
  id: string;
  title: string;
  description: string;
  user: User;
}
