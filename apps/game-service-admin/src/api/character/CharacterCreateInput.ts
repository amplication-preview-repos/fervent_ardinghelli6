import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { PositionCreateNestedManyWithoutCharactersInput } from "./PositionCreateNestedManyWithoutCharactersInput";

export type CharacterCreateInput = {
  name?: string | null;
  player?: PlayerWhereUniqueInput | null;
  positions?: PositionCreateNestedManyWithoutCharactersInput;
};
