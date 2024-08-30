import { Character } from "../character/Character";

export type Player = {
  characters?: Array<Character>;
  createdAt: Date;
  email: string | null;
  id: string;
  updatedAt: Date;
  username: string | null;
};
