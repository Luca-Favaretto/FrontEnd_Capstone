import { User } from './user';

export interface Presence {
  id: string;
  date: string;
  startingHour: string;
  finishHour: any;
  abstinenceStatus: string;
  user: User;
}
