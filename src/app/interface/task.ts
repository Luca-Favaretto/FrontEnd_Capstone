import { UserDTO } from './user-dto';

export interface Task {
  title: string;
  description: string;
  expirationDate: string;
  user: UserDTO;
}
