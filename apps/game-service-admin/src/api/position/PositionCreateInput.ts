import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";

export type PositionCreateInput = {
  character?: CharacterWhereUniqueInput | null;
  xCoordinate?: number | null;
  yCoordinate?: number | null;
};
