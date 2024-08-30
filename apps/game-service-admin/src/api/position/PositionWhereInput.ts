import { CharacterWhereUniqueInput } from "../character/CharacterWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PositionWhereInput = {
  character?: CharacterWhereUniqueInput;
  id?: StringFilter;
  xCoordinate?: FloatNullableFilter;
  yCoordinate?: FloatNullableFilter;
};
