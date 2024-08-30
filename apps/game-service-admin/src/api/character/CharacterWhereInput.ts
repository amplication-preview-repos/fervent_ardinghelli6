import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { PositionListRelationFilter } from "../position/PositionListRelationFilter";

export type CharacterWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  player?: PlayerWhereUniqueInput;
  positions?: PositionListRelationFilter;
};
