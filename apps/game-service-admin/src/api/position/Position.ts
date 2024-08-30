import { Character } from "../character/Character";

export type Position = {
  character?: Character | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  xCoordinate: number | null;
  yCoordinate: number | null;
};
