import { Player } from "../player/Player";
import { Position } from "../position/Position";

export type Character = {
  createdAt: Date;
  id: string;
  name: string | null;
  player?: Player | null;
  positions?: Array<Position>;
  updatedAt: Date;
};
