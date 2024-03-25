export interface User {
  id: string;
  name: string;
  surname: string;
  username: string;
  email: string;
  avatar: string;
  rating: number;
  roles: Role[];
  contract: Contract;
}

export interface Role {
  id: string;
  role: string;
}

export interface Contract {
  id: string;
  contractTypology: string;
  weeklyHours: number;
  retribution: number;
  startingDate: Date;
  finishDate: Date;
}
