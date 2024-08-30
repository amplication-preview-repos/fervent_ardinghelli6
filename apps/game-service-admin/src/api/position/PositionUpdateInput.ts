import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";

export type PositionUpdateInput = {
  character?: CharacterWhereUniqueInput | null;
  xCoordinate?: number | null;
  yCoordinate?: number | null;
};
