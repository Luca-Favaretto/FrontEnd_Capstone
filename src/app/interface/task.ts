import { UserDTO } from './user-dto';

export interface Task {
  id: string;
  title: string;
  description: string;
  expirationDate: string;
  user: UserDTO;
}
