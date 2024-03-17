export interface UserDTO {
  id: string;
  name: string;
  surname: string;
  username: string;
  password: string;
  email: string;
  avatar: string | null;
  rating: number | null;
}
