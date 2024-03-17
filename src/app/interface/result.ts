import { UserDTO } from './user-dto';

export interface Result {
  id: string;
  title: string;
  description: string;
  user: UserDTO;
}
